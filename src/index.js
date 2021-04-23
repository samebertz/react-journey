import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Test from './Test.jsx';

ReactDOM.render(
  <React.StrictMode>
    <div id="testwrapper">
    {new Array(10).fill(0).map((_,i)=><Test key={i}/>)}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your Kapp, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
