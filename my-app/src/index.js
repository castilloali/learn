import React from 'react';
import ReactDOM from 'react-dom/client';

import { UseContextProvider } from './components/UseContextProvider';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UseContextProvider>
    <App />
  </UseContextProvider>
);



