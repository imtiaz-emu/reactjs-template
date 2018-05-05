import React from "react";

import {Scroller} from './Scroller';
import {Books} from './Books';
import {LoadBooks} from '../utils/LoadBooks';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.books = LoadBooks();
    }

    render() {
        return (
            <div>
                <Scroller/>
                <section className="recomended-sec">
                    <div className="container">
                        <div className="title">
                            <h2>highly recommendes books</h2>
                            <hr/>
                        </div>
                        <Books books={this.books}/>
                        <div className="btn-sec">
                            <a href="#" className="btn gray-btn">view all books</a>
                        </div>
                    </div>
                </section>

                <section className="about-sec">
                    <div className="about-img">
                        <figure style={ { backgroundImage: `url(require("../images/about-img.jpg"))` } }></figure>
                        {/*<figure style={"background:url(./images/about-img.jpg)no-repeat;"}></figure>*/}
                    </div>
                    <div className="about-content">
                        <h2>About bookstore,</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's printer took a galley of type and Scrambled it to make a type and
                            typesetting industry. Lorem Ipsum has been the book. </p>
                        <p>It has survived not only fiveLorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's printer took a galley of type and</p>
                        <div className="btn-sec">
                            <a href="shop.html" className="btn yellow">shop books</a>
                            <a href="login.html" className="btn black">subscriptions</a>
                        </div>
                    </div>
                </section>

                <section className="features-sec">
                    <div className="container">
                        <ul>
                            <li>
                                <span className="icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                <h3>SAFE SHOPPING</h3>
                                <h5>Safe Shopping Guarantee</h5>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's...</h6>
                            </li>
                            <li>
                                <span className="icon return"><i className="fa fa-reply-all"
                                                                 aria-hidden="true"></i></span>
                                <h3>30- DAY RETURN</h3>
                                <h5>Moneyback guarantee</h5>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's...</h6>
                            </li>
                            <li>
                                <span className="icon chat"><i className="fa fa-comments" aria-hidden="true"></i></span>
                                <h3>24/7 SUPPORT</h3>
                                <h5>online Consultations</h5>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's...</h6>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="offers-sec">
                    <div className="cover"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="detail">
                                    <h3>Top 50% OFF on Selected</h3>
                                    <h6>We are now offering some good discount
                                        on selected books go and shop them</h6>
                                    <a href="products.html" className="btn blue-btn">view all books</a>
                                    <span className="icon-point percentage">
                            <img src="images/precentagae.png" alt=""/>
                        </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="detail">
                                    <h3>Shop $ 500 Above and Get Extra!</h3>
                                    <h6>We are now offering some good discount
                                        on selected books go and shop them</h6>
                                    <a href="products.html" className="btn blue-btn">view all books</a>
                                    <span className="icon-point amount"><img src="images/amount.png" alt=""/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
}