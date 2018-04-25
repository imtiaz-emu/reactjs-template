import React from 'react';
import { Book } from './Book';

export class Books extends React.Component {
  render() {
    return (
      <div className="row mb-2">
        {
            this.props.books.map((book) => <Book key={book.id} detail={book}/>)
        }
      </div>
    );
  }
}