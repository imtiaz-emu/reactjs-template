import React from 'react';
import {LoadBooks} from '../utils/LoadBooks';

export class BookDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {book: {}};
    }

    componentDidMount() {
        this.getBookById(this.props.match.params.id);
    }

    getBookById(id) {
        var new_state_book = this.state.book;
        var books = LoadBooks();
        new_state_book = books.filter(function (book) {
            if (book.id === id) {
                return book;
            }
        });
        this.setState({book: new_state_book[0]});
    }

    render() {
        return (
            <section className="product-sec">
                <div className="container">
                    <h1>{this.state.book.name}</h1>
                    <h3>by - {this.state.book.author}</h3>
                    <div className="row">
                        <div className="col-md-6 slider-sec">
                            {/*<!-- main slider carousel -->*/}
                            <div id="myCarousel" className="carousel slide">
                                {/*<!-- main slider carousel items -->*/}
                                <div className="carousel-inner">
                                    <div className="active item carousel-item" data-slide-number="0">
                                        <img src={this.state.book.image} className="img-fluid"/>
                                    </div>
                                </div>
                                {/*<!-- main slider carousel nav controls -->*/}
                            </div>
                            {/*<!--/main slider carousel-->*/}
                        </div>
                        <div className="col-md-6 slider-content">
                            <p>{this.state.book.description}</p>
                            <ul>
                                <li>
                                    <span className="name">Digital List Price</span><span className="clm">:</span>
                                    <span className="price">$4.71</span>
                                </li>
                                <li>
                                    <span className="name">Print List Price</span><span className="clm">:</span>
                                    <span className="price">$10.99</span>
                                </li>
                                <li>
                                    <span className="name">Kindle Price</span><span className="clm">:</span>
                                    <span className="price final">$3.37</span>
                                </li>
                                <li><span className="save-cost">Save $7.62 (69%)</span></li>
                            </ul>
                            <div className="btn-sec">
                                <button className="btn ">Add To cart</button>
                                <button className="btn black">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}