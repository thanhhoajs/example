import { Logger } from '@thanhhoajs/logger';
import type {
  IThanhHoaWebSocketData,
  IWebSocketRouteHandler,
} from '@thanhhoajs/websocket';
import type { ServerWebSocket } from 'bun';

const logger = Logger.get('ROOM');

export const chatHandlers: IWebSocketRouteHandler = {
  onOpen: (ws, query, params) => {
    logger.trace('Room onOpen called', { query, params });

    const roomId = params?.roomId;
    if (roomId) {
      ws.send(
        `[SYSTEM] [${new Date().toISOString()}] | Hi userId: ${
          ws.data.clientId
        }, welcome to room!`,
      );
      const chatTopic = `chat:${roomId}`;

      ws.subscribe(chatTopic);
      ws.data.custom = { chatTopic };
    } else {
      logger.error('No roomId provided');
      ws.close(1000, 'No roomId provided');
    }
  },
  onMessage: (ws: ServerWebSocket<IThanhHoaWebSocketData>, message: any) => {
    const chatTopic = ws.data.custom?.chatTopic;

    if (chatTopic) {
      ws.publish(chatTopic, message);
    } else {
      logger.error('No chatTopic found');
    }
  },
  onClose: (ws, code, reason) => {
    const chatTopic = ws.data.custom?.chatTopic;

    if (chatTopic) {
      ws.unsubscribe(chatTopic);
    }
  },
};
