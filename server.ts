import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5173;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const parts = template.split('<!--app-html-->');

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const { pipe } = await render(req, {
        onShellReady() {
          res.write(parts[0]);
          pipe(res);
        },
        onShellError(err: unknown) {
          const message = err instanceof Error ? err.message : 'Pipe OnError';
          console.log(message);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: unknown) {
          const message = err instanceof Error ? err.message : 'Pipe OnError';
          console.log(message);
        },
      });
    } catch (err) {
      if (err instanceof Error) vite.ssrFixStacktrace(err);
      next(err);
    }
  });

  return app;
}

createServer().then((app) =>
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  })
);
