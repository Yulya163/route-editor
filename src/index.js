import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YMaps
        query={{
            apikey: "5ee9a68c-51cd-411a-b8c4-d4ef5dbd590d"              
        }}
    >
      <App />
    </YMaps>
  </React.StrictMode>
);

reportWebVitals();
