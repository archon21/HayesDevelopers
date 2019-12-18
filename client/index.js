import React from 'react';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';
import history from './history';
import store from './store';

import { hydrate, render } from 'react-dom';

const rootElement = document.getElementById('app');
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    rootElement
  );
}

// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker()
