import React from 'react';
import { Book } from './Book';

import {LoadBooks} from '../utils/LoadBooks';

export class Books extends React.Component {
  constructor(props){
    super();
    this.all_books = LoadBooks();
  }

  render() {
    return (
      <div className="row mb-2">
        {
            typeof this.props.books != "undefined" ?
                this.props.books.map((book) => <Book key={book.id} detail={book}/>) :
                this.all_books.map((book) => <Book key={book.id} detail={book}/>)
        }
      </div>
    );
  }
}