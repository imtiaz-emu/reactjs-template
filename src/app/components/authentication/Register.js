import React from 'react';
import {Link} from 'react-router-dom';
import api from '../../utils/EndPoint';
import validator from 'validator';

export class Register extends React.Component {
  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      formData: {
        email: {value: '', isValid: true, message: ''},
        password: {value: '', isValid: true, message: ''},
        password_confirmation: {value: '', isValid: true, message: ''}
      },
      display_errors: false,
      errors: []
    }
  }

  handleInputChange(e) {
    let formData = Object.assign({}, this.state.formData);
    formData[e.target.name] = e.target.value;
    this.setState({formData});
  }

  validateForm() {
    var state = this.state.formData;
    if (!validator.isEmail(state.email.value)) {
      state.email.isValid = false;
      state.email.message = 'Not a valid email address';

      this.setState(state);
      return false;
    }

    if (!validator.equals(state.password.value, state.password_confirmation.value)) {
      state.password.isValid = false;
      state.password_confirmation.isValid = false;
      state.password_confirmation.message = 'Password Mismatch!';

      this.setState(state);
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    if (!this.validateForm()) {
      return;
    }

    const {email, password, password_confirmation} = this.state.formData;
    const url = api.api_url + "auth/register";

    // fetch(url, {
    //   method: 'POST',
    //   headers: new Headers({
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   }),
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //     remember_me: remember_me
    //   }),
    // })
    //     .then(res => res.json())
    //     .catch(error => console.error('Error:', error))
    //     .then(response => {
    //       if (typeof response.access_token == "undefined")
    //         this.setState({display_errors: true, errors: response.error.user_authentication});
    //       else {
    //         localStorage.setItem('jwtToken', response.access_token);
    //         this.props.history.push('/');
    //       }
    //     });
    //
    // event.preventDefault();
  }

  render() {
    var {email, password, password_confirmation} = this.state.formData;
    return (
        <section className="static about-sec">
          <div className="container">
            <h1>My Account / Register</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
            <div className={"alert-danger " + (this.state.display_errors ? 'alert show' : 'hidden')} role="alert">
              <ul>
                {this.state.errors.map((error, i) => {
                  return <li key={i}>{error}</li>
                })}
              </ul>
            </div>
            <div className="form">
              <form noValidate onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <input
                        type="email" autoFocus
                        name="email" value={email.value}
                        placeholder="Enter Email"
                        onChange={this.handleInputChange}
                        required/>
                    <span className="required-star">{email.message}</span>
                  </div>
                  <div className="col-md-4">
                    <input
                        name="password"
                        type="password" value={password.value}
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        required/>
                    <span className="required-star">{password.message}</span>
                  </div>
                  <div className="col-md-4">
                    <input
                        name="password_confirmation"
                        type="password" value={password_confirmation.value}
                        placeholder="Password Confirmation"
                        onChange={this.handleInputChange}
                        required/>
                    <span className="required-star">{password_confirmation.message}</span>
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