import React from 'react';
import {Link} from 'react-router-dom';

export class Publisher extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="col-lg-3 col-md-6">
                <div className={"item"}>
                    <img src={this.props.detail.logo} alt="img"/>
                    <h3><Link to={"publishers/" + this.props.detail.id}>{this.props.detail.name}</Link></h3>
                    <h6><span className="price">$49</span> / <a href="#">Buy Now</a></h6>
                </div>
            </div>
        );
    }
}