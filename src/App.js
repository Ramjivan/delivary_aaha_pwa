import React, { Component } from 'react'
import Login from './Layouts/Login'
import Home from './Layouts/Home'
import config from './config.json'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { requestFirebaseNotificationPermission } from './firebaseMessaging'
const apiBaseUrl = config.apiBaseUrl
class App extends Component {
  componentDidMount() {
    requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      localStorage.setItem("device_token", firebaseToken);
      if(localStorage.getItem('authToken')) {
        const apiAuth = 'Bearer ' + localStorage.getItem('authToken');
        fetch(apiBaseUrl + 'valet/update-token?device_token=' + firebaseToken, {
          method: 'post',
          headers: new Headers({
              'Authorization': apiAuth,
          }),
        }).then((response) => console.log(response));
      }
      console.log(firebaseToken);
    })
    .catch((err) => {
      return err;
    });
  }
  render() {
    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App