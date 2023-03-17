import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('rootId') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
