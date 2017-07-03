import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/App.css';
import Config from './configuration/config.json';

const currentUrl = window.location.href;

// If we're on http, redirect to https
if (! currentUrl.includes(Config.securePrefix) && ! currentUrl.includes(Config.localUrl)){
  window.location.replace(Config.secureSiteUrl);
} else{
  ReactDOM.render(
    <App className="app-root"/>,
    document.getElementById('root')
  );
}
