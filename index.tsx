
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker safely after mount, preventing any SW error from blocking the UI
try {
  if ('serviceWorker' in navigator) {
    registerSW({ 
      immediate: true,
      onRegisterError(error) {
        console.warn('PWA service worker registration warning:', error);
      }
    });
  }
} catch (swErr) {
  console.warn('PWA service worker initialization warning:', swErr);
}

