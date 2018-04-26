import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, Link, IndexRoute} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styles from './styles/blog.css';

import {Root} from './components/Root';
import {Home} from './components/Home';
import {BookDetail} from './components/BookDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path='/' component={Root}/>
          <Route exact path="/" component={Home}/>
          <Route path='/book' component={BookDetail} />
        </div>
      </BrowserRouter>
    );
  };
}

render(<App />, window.document.getElementById('app'));