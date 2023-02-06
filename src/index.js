import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { YMaps } from '@pbe/react-yandex-maps';

const API_Key = process.env.REACT_APP_API_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YMaps
        query={{            
            apikey: API_Key
        }}
    >
      <App />
    </YMaps>
  </React.StrictMode>
);

reportWebVitals();
