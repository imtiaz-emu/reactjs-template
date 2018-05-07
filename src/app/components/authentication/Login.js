import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import api from '../../utils/EndPoint';

export class Login extends React.Component {
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      formData: {
        email: '',
        password: '',
        remember_me: ''
      },
      display_errors: false,
      errors: []
    }
  }

  handleInputChange(e) {
    let formData = Object.assign({}, this.state.formData);
    formData[e.target.name] = e.target.value;
    this.setState({formData})
  }

  handleSubmit(event) {
    if (!event.target.checkValidity()) {
      return;
    }

    const {email, password, remember_me} = this.state.formData;
    const url = api.api_url + "auth/login";

    fetch(url, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: email,
        password: password,
        remember_me: remember_me
      }),
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      if (typeof response.access_token == "undefined")
        this.setState({display_errors: true, errors: response.error.user_authentication});
      else{
        localStorage.setItem('jwtToken', response.access_token);
        this.props.history.push('/');
      }
    });

    event.preventDefault();
  }

  render() {
    return (
        <section className="static about-sec">
          <div className="container">
            <h1>My Account / Login</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
            <div className={"alert-warning " + (this.state.display_errors ? 'alert show' : 'hidden')} role="alert">
              <ul>
                {this.state.errors.map((error, i) => {
                  return <li key={i}>{error}</li>
                })}
              </ul>
            </div>
            <div className="form">
              <form noValidate onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-5">
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        onChange={this.handleInputChange} required/>
                    <span className="required-star">*</span>
                  </div>
                  <div className="col-md-5">
                    <input
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Enter Password" required/>
                    <span className="required-star">*</span>
                  </div>
                  <div className="col-md-12">
                    <div className="checkbox">
                      <label>
                        <input
                            onChange={this.handleInputChange}
                            type="checkbox" name="remember_me"/> Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <button type="submit" className="btn black">Login</button>
                    <h5>not Registered? <Link to={"/register"}>Register here</Link></h5>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

    );
  }
}

export default withRouter(Login)