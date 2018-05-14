import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styles_1 from '../styles/blog.css';
import styles_2 from '../styles/style.css';
import styles_3 from '../styles/custom.css';

import api from '../utils/EndPoint';
import UserState from '../state/states/user';
import {Root} from './Root';
import Home from './Home';
import Login from './authentication/Login';
import {Register} from './authentication/Register';
import {BookDetail} from './BookDetail';
import {Books} from './Books';
import {PublisherDetail} from './publisher/PublisherDetail';
import {Publishers} from './publisher/Publishers';
import {PublisherForm} from './publisher/PublisherForm';

function PrivateRoute({component: Component, current_user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => current_user == null || current_user.roles.indexOf('admin') == -1
        ? <Redirect to={{pathname: '/', state: {from: props.location, message: 'Unauthorized!'}}}/>
        : <Component {...props} />}
    />
  )
}

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Root>
          <Route exact path="/" render={(routeProps) => (
            <Home {...routeProps}/>
          )}/>
          <Route exact path="/login" render={(routeProps) => (
            <Login {...routeProps}/>
          )}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path='/books' component={Books}/>
          <Route path='/books/:id' component={BookDetail}/>
          <Route exact path='/publishers' component={Publishers}/>
          <Route path='/publishers/:id' component={PublisherDetail}/>
          <PrivateRoute exact current_user={props.current_user} path='/publishers/new' component={PublisherForm}/>
          <PrivateRoute exact current_user={props.current_user} path='/publishers/:id/edit' component={PublisherForm}/>
        </Root>
      </Switch>
    </BrowserRouter>
  );
};

function checkAppState(state) {
  try {
    return state.appState.user.current.user;
  }
  catch (state) {
    if (api.is_logged_in()) {
      fetch(api.api_url + "profiles/" + api.current_profile_id, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': api.api_token
        })
      }).then(res => res.json())
        .then(response => {
          console.log(response);
          dispatch({
            type: "UPDATE_USER",
            payload: response
          });
          return response;
        }).catch(error => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('current_profile_id');
        console.error('Error:', error);
        return null;
      });
    }
    else return null;
  }
}

const mapStateToProps = (state) => ({
  current_user: checkAppState(state)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser: UserState.update
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
