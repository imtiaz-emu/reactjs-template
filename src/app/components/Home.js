import React from "react";

import { Scroller } from './Scroller';
import { Books } from './Books';

export class Home extends React.Component {
  constructor(props){
    super();
    this.books = loadBooks();
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


function loadBooks() {
  return [{
      "id": "1",
      "name": "For Whom The Bell Tolls",
      "image": "https://s3-ap-southeast-1.amazonaws.com/rokomari110/productNew/260X372/rokimg20141031_90990.gif",
      "price": "718",
      "isbn": "9780099908609",
      "condition": "New",
      "description": "Robert Jordan is a young American with the International Brigades attached to an antifascist guerilla unit in the mountains of Spain. He is an experienced dynamiter, and he is tasked by a communist Russian general to",
      "category": [
        "Drama",
        "War",
        "History"
      ],
      "author": "Ernest Hemingway",
      "rating": 3
    },
    {
      "id": "2",
      "name": "To Have And Have Not",
      "image": "https://s3-ap-southeast-1.amazonaws.com/rokomari110/productNew/260X372/rokimg_20140716_84519.gif",
      "price": "1895",
      "isbn": "9780684818986",
      "condition": "New",
      "description": "'To Have and Have Not' is the dramatic story of Harry Morgan, an honest man who is forced into running contraband between Cuba and Key West as a means of keeping his crumbling family financially afloat",
      "category": [
        "Romance"
      ],
      "author": "Ernest Hemingway",
      "rating": 2
    }];
}