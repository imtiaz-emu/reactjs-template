import React from 'react';
import {LoadPublishers} from '../../utils/LoadBooks';
import {Link} from 'react-router-dom';

export class PublisherDetail extends React.Component {
  constructor(props) {
    super();
    this.state = {publisher: {}};
  }

  componentDidMount() {
    this.getPublisherById(this.props.match.params.id);
  }

  getPublisherById(id) {
    var new_state_publisher = this.state.publisher;
    var publishers = LoadPublishers();
    new_state_publisher = publishers.filter(function (publisher) {
      if (publisher.id === id) {
        return publisher;
      }
    });
    this.setState({publisher: new_state_publisher[0]});
  }

  render() {
    return (
      <section className="product-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 slider-sec">
              {/*<!-- main slider carousel -->*/}
              <div id="myCarousel" className="carousel slide">
                {/*<!-- main slider carousel items -->*/}
                <div className="carousel-inner">
                  <div className="active item carousel-item" data-slide-number="0">
                    <img src={this.state.publisher.logo} className="img-fluid"/>
                  </div>
                </div>
                {/*<!-- main slider carousel nav controls -->*/}
              </div>
              {/*<!--/main slider carousel-->*/}
            </div>
            <div className="col-md-6 slider-content">
              <ul>
                <li>
                  <span className="name">Name</span><span className="clm">:</span>
                  <span className="price">{this.state.publisher.name}</span>
                </li>
                <li>
                  <span className="name">Proprietor</span><span className="clm">:</span>
                  <span className="price">{this.state.publisher.proprietor}</span>
                </li>
                <li>
                  <span className="name">Phone</span><span className="clm">:</span>
                  <span className="price final">{this.state.publisher.phone}</span>
                </li>
              </ul>
              <div className="btn-sec">
                <Link className="btn " to={'/publishers/'+ this.props.match.params.id + '/edit'}>Edit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
