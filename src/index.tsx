import React from 'react';
import ReactDOM from 'react-dom/client';
import Template from './components/Template';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  </Provider>
);
