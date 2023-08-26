import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from 'components/ThemeToggler/ThemeToggler';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="Goose-Track-06-Frontend">
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
