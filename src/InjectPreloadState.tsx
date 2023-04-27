import { PreloadedState } from '@reduxjs/toolkit';
import { PropsWithChildren } from 'react';

import { RootState } from './store/store';

interface Props {
  preloadedState: PreloadedState<RootState>;
}

export const InjectPreloadState = ({ preloadedState, children }: PropsWithChildren<Props>) => {
  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}`,
        }}
      />
    </>
  );
};
