import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProviders } from './Providers/modal';

ReactDOM.render(
  <React.StrictMode>
    <ModalProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProviders>
  
  </React.StrictMode>,
  document.getElementById('root')
);
