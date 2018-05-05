import React from 'react';
import {Book} from './Book';

import {LoadBooks} from '../utils/LoadBooks';

export class Books extends React.Component {
    constructor(props) {
        super();
        this.all_books = LoadBooks();
    }

    render() {
        return (
            <div className="container">
                <div className="title">
                    <h2>All books</h2>
                    <hr/>
                </div>
                <div className="row">
                    {
                        typeof this.props.books != "undefined" ?
                            this.props.books.map((book) => <Book key={book.id} detail={book}/>) :
                            this.all_books.map((book) => <Book key={book.id} detail={book}/>)
                    }
                </div>
            </div>
        );
    }
}