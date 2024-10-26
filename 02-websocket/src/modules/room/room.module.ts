import { RouterHandler, type ThanhHoaWebSocket } from '@thanhhoajs/websocket';

import { chatHandlers } from './room.handler';

export function roomModule(ws: ThanhHoaWebSocket) {
  const router = new RouterHandler();
  router.route(':roomId/chat', chatHandlers);

  ws.group('room', router);
}
