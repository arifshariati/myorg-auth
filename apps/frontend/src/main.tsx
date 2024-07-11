import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { CounterProvider } from '@myorg-auth/react';
import { add, subtract } from '@myorg-auth/server';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CounterProvider add={add} subtract={subtract}>
      <App />
    </CounterProvider>
  </StrictMode>
);
