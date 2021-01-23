import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { requestFirebaseNotificationPermission } from './firebaseMessaging'
import firebase from 'firebase/app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
navigator.serviceWorker
.register(process.env.PUBLIC_URL + '/firebase-messaging-sw.js')
.then((registration) => {
  firebase.messaging().useServiceWorker(registration);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
