import React from 'react';
import ReactDOM from 'react-dom';
import { ContentEditor } from './ContentEditor';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';

import { siteTheme } from './themes/siteTheme'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={siteTheme}>
      <ContentEditor />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
