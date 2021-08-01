import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = (props) => {
  // eslint-disable-next-line react/jsx-one-expression-per-line
  return <div>Hello, {props.name}</div>;
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
