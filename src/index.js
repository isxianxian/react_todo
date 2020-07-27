import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import store from './store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './static/style.css';

ReactDOM.render(
  <Provider store={store}>
    <Main></Main>
  </Provider>,
  document.getElementById('root')
);
