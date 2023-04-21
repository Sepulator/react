import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from './store/store';
import { ReactNode } from 'react';

interface Props {
  preloadedState: PreloadedState<RootState>;
  children?: ReactNode;
}

export const InjectPreloadState = ({ preloadedState, children }: Props) => {
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
