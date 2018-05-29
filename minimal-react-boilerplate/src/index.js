import React from 'react';
import ReactDOM from 'react-dom';

const test = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{test}</div>,
  document.getElementById('app')
);

module.hot.accept();
