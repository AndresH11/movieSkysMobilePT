import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MoviesProvider from './context/MoviesProvider';
import ViewProvider from './context/ViewProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoviesProvider>
      <ViewProvider>
        <App />
      </ViewProvider>
    </MoviesProvider>
  </React.StrictMode>
)
