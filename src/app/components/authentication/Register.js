import React from 'react';
import {Link} from 'react-router-dom';

export class Register extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
        <section className="static about-sec">
          <div className="container">
            <h1>My Account / REgister</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
            <div className="form">
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <input placeholder="Enter User Name" required/>
                    <span className="required-star">*</span>
                  </div>
                  <div className="col-md-4">
                    <input type="email" placeholder="Password" required/>
                    <span className="required-star">*</span>
                  </div>
                  <div className="col-md-4">
                    <input type="email" placeholder="Repeat Password" required/>
                    <span className="required-star">*</span>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <button className="btn black">Register</button>
                    <h5>not Registered? <Link to={"/login"}>Login here</Link></h5>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

    );
  }
}