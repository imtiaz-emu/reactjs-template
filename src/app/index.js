import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, Link, IndexRoute} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styles_1 from './styles/blog.css';
import styles_2 from './styles/style.css';
import styles_3 from './styles/custom.css';

import {Root} from './components/Root';
import {Home} from './components/Home';
import {Login} from './components/authentication/Login';
import {Register} from './components/authentication/Register';
import {BookDetail} from './components/BookDetail';
import {Books} from './components/Books';
import {PublisherDetail} from './components/publisher/PublisherDetail';
import {Publishers} from './components/publisher/Publishers';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path='/books' component={Books} />
          <Route path='/books/:id' component={BookDetail} />
          <Route exact path='/publishers' component={Publishers} />
          <Route path='/publishers/:id' component={PublisherDetail} />
        </Root>
      </BrowserRouter>
    );
  };
}

render(<App />, window.document.getElementById('app'));