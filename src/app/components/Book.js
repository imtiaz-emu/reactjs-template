import React from 'react';
import {Link} from 'react-router-dom';

export class Book extends React.Component {
    constructor(props) {
        super();
        this.state = {
            rate: props.detail.rating
        }
    }

    upvote(event) {
        this.setState({
            rate: event.target.value
        });
    }

    render() {
        let customClass = '';
        let hoverItem = (
            <div className="hover">
                <a href="product-single.html">
                    <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                </a>
            </div>
        );
        if (window.location.pathname == '/books'){
            customClass = 'book-item';
            hoverItem = '';
        }
        return (
            <div className="col-lg-3 col-md-6">
                <div className={"item " + customClass}>
                    <img src={this.props.detail.image} alt="img"/>
                    <h3><Link to={"books/" + this.props.detail.id}>{this.props.detail.name}</Link></h3>
                    <h6><span className="price">$49</span> / <a href="#">Buy Now</a></h6>
                    {hoverItem}
                </div>
            </div>
        );
    }
}