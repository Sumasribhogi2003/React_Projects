import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 use 'react-dom/client' instead of 'react-dom'
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
