import { Logger } from '@thanhhoajs/logger';

const index = await Bun.file('./public/index.html').text();

const logger = Logger.get('CLIENT');

Bun.serve({
  port: 3001,
  fetch(req) {
    return new Response(index, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
});

logger.success(`Client is running on http://localhost:3001`);
