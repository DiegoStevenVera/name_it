import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import Header from './components/Header/Header.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='Section'>
      <Header />
      <App /> 
    </div>
  </>

);
