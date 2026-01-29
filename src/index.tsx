import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import HistoryRouter from './components/HistoryRouter';
import browserHistory from './browser-history';
import App from './App';

import {store} from './store';
import {fetchCheckAuth} from './store/api-actions';
import {getToken} from './services/token';

import './index.scss';

const token = getToken();
store.dispatch(fetchCheckAuth(token));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
