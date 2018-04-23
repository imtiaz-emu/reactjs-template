import React from "react";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styles from './styles/blog.css';

import { Header } from './components/Header';
import { Scroller } from './components/Scroller';
import { Books } from './components/Books';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Scroller/>
        <Books/>
      </div>
    );
  };
}

render(<App />, window.document.getElementById('app'));