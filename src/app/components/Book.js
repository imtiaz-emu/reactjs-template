import React from 'react';

export class Book extends React.Component {
  constructor(props){
    super();
    this.state = {
      rate: props.detail.rating
    }
  }

  upvote(event){
    this.setState({
      rate: event.target.value
    });
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">
              <a className="text-dark" href="#">{this.props.detail.name}</a>
            </h3>
            <div className="mb-1 text-muted">Rating: {this.state.rate}</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to
              additional content.</p>
            <input type="text" value={this.state.rate} onChange={(event) => this.upvote(event)}/>
          </div>
          <img className="card-img-right flex-auto d-none d-lg-block book-cover"
               alt="Thumbnail [200x250]"
               src={this.props.detail.image}/>
        </div>
      </div>
    );
  }
}