import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KApp from './KApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <KApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your Kapp, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
