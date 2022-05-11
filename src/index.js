import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProviders } from './Providers/modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ModalProviders>
      <ToastContainer />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProviders>
  
  </React.StrictMode>,
  document.getElementById('root')
);
