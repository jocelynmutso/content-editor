import React from 'react';
import ReactDOM from 'react-dom';
import { CMSEditor } from './core';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { IntlProvider } from 'react-intl'
import { siteTheme } from './themes/siteTheme'
import messages from './intl';

import API from './api'; 

const locale = "en";

const service = API.mock();

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider theme={siteTheme}>
        <CMSEditor service={service} />
      </ThemeProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
