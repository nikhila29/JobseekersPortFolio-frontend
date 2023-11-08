import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
// import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store';
import { toast } from 'react-toastify';

toast.configure({
  autoClose: 2000,
  draggable: false,
  closeButton: false,
  draggablePercent: 100,
  progressClassName: 'ourbar',
  position: 'top-right',
  style: {top: '90px'}
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter> 
              <App />
          </BrowserRouter>
         </PersistGate>
     </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

