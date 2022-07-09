import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// console.log("根组件执行log")
ReactDOM.render(
  // 使用严格模式，检查语法是否符合规范
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
