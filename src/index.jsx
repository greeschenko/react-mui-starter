require('./app.sass');
require("../node_modules/font-awesome/scss/font-awesome.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MyLayout from './layout.jsx';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <MyLayout />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
