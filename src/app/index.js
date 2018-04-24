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
    const books = loadBooks();
    return (
      <div className="container">
        <Header/>
        <Scroller/>
        <Books books={books}/>
      </div>
    );
  };
}

render(<App />, window.document.getElementById('app'));

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
      "author": "Ernest Hemingway"
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
      "author": "Ernest Hemingway"
    }];
}