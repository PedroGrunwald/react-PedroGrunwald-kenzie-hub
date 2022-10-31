import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);       
root.render(
  <React.StrictMode>
    <BrowserRouter/>
    <ToastContainer autoClose={1500}/>
    <App />
    <BrowserRouter/>
  </React.StrictMode>
);

