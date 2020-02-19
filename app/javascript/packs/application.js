import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min';
import '../../assets/stylesheets/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import generalReducer from '../reducers/index';
import Display from '../components/Display';

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');
require('jquery');

const initialState = {
};

const store = createStore(generalReducer, initialState);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Display store={store} />,
    document.querySelector('#root'),
  );
});