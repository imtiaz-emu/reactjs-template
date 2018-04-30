import React from "react";

import { Scroller } from './Scroller';
import { Books } from './Books';
import {LoadBooks} from '../utils/LoadBooks';

export class Home extends React.Component {
  constructor(props){
    super();
    this.books = LoadBooks();
  }

  render() {
    return (
      <div>
        <Scroller/>
        <Books books={this.books}/>
      </div>
    );
  };
}