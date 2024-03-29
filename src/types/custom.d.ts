declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare interface Error {
  name: string;
  message: string;
  stack?: string;
  code?: number | string;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}
