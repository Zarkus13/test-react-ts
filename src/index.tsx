import React from 'react';
import ReactDOM from 'react-dom/client';
import Template from './components/Template';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './utils/i18n';
import { ErrorBoundary } from 'react-error-boundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ErrorBoundary
    onError={(e) => console.log('error', e)}
    fallback={<>Oups</>}
  >
    <Provider store={store}>
      <BrowserRouter>
        <Template />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);
