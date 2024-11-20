import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import App from './App.jsx';

const domain = import.meta.env.VITE_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      cacheLocation='localstorage' // 인증 상태 로컬 스토리지에 저장
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </StrictMode>
);
