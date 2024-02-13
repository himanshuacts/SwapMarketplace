import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import report from './report';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

report();