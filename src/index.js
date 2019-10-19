/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import Loadable from "react-loadable";
import Loader from './components/modules/loader';

import './favicon.ico';
import 'babel-polyfill';

const store = configureStore();

const ErrorBoundary = Loadable({
  loader: () => import('./components/modules/errorBoundary' /* webpackChunkName: "errorboundary, webpackPrefetch: true" */),
  loading: Loader
});

const App = Loadable({
  loader: () => import('./components/App' /* webpackChunkName: "App" */),
  loading: Loader
});


window.debug = {
  // eslint-disable-next-line no-console
  log: (title, message) => console.log(message ? title : message, message && message),
  // eslint-disable-next-line no-console
  error: (title, message) => console.error(message ? title : message, message && message)
};

render(
  <AppContainer>
    <ErrorBoundary>
      <App store={store} history={history}/>
    </ErrorBoundary>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewRoot = require('./components/App').App;
    render(
      <AppContainer>
        <ErrorBoundary>
          <NewRoot store={store} history={history}/>
        </ErrorBoundary>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
