import type * as express from 'express';
import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';

import { routes } from './router';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { InjectPreloadState } from './InjectPreloadState';
import { productApi } from './store/api';

const store = setupStore();

export async function render(request: express.Request, options: RenderToPipeableStreamOptions) {
  await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();

  const { query, dataRoutes } = createStaticHandler(routes);
  const remixRequest = createFetchRequest(request);
  const context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);

  return ReactDOMServer.renderToPipeableStream(
    <InjectPreloadState preloadedState={preloadedState}>
      <React.StrictMode>
        <Provider store={store}>
          <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
        </Provider>
      </React.StrictMode>
    </InjectPreloadState>,
    options
  );
}

export function createFetchRequest(req: express.Request): Request {
  const host = req.get('host');
  const origin = `${req.protocol}://${host}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  req.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }

  return new Request(url.href, init);
}
