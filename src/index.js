import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/Goose-Track-06"> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
