import React from 'react';
import { BookDetail } from './BookDetail';

export class Books extends React.Component {
  render() {
    return (
      <div className="row mb-2">
        <BookDetail/>
        <BookDetail/>
      </div>
    );
  }
}