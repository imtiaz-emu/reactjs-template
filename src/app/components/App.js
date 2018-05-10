import React from "react";
import {connect} from "react-redux";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styles_1 from '../styles/blog.css';
import styles_2 from '../styles/style.css';
import styles_3 from '../styles/custom.css';

import {Root} from './Root';
import {Home} from './Home';
import {Login} from './authentication/Login';
import {Register} from './authentication/Register';
import {BookDetail} from './BookDetail';
import {Books} from './Books';
import {PublisherDetail} from './publisher/PublisherDetail';
import {Publishers} from './publisher/Publishers';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Root>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path='/books' component={Books}/>
            <Route path='/books/:id' component={BookDetail}/>
            <Route exact path='/publishers' component={Publishers}/>
            <Route path='/publishers/:id' component={PublisherDetail}/>
          </Root>
        </BrowserRouter>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    userData: state.saveUserData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch({
        type: "UPDATE_USER",
        payload: user
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)