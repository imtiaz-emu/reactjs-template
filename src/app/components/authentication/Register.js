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
        name: {value: '', isValid: true, message: ''},
        password: {value: '', isValid: true, message: ''},
        password_confirmation: {value: '', isValid: true, message: ''}
      },
      display_errors: false,
      errors: []
    }
  }

  handleInputChange(e) {
    let formData = Object.assign({}, this.state.formData);
    formData[e.target.name]['value'] = e.target.value;
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

    if (state.name.value.length < 6 || !state.name.value.match(/^[a-zA-Z0-9]+$/)) {
      state.name.isValid = false;
      state.name.message = "Username must contain only letters and should atleast 6 characters long."
    }

    state.password_confirmation.message = '';
    state.email.message = '';
    this.setState(state);
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.validateForm()) {
      return false;
    }

    const {email, name, password, password_confirmation} = this.state.formData;
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
  }

  render() {
    var {email, name, password, password_confirmation} = this.state.formData;
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
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                        type="email" autoFocus
                        name="email" value={this.state.formData.email.value}
                        placeholder="Enter Email"
                        onChange={this.handleInputChange}
                        required/>
                    <small className="help-block">{email.message}</small>
                  </div>
                  <div className="col-md-6">
                    <input
                        type="text" autoFocus
                        name="name" value={this.state.formData.name.value}
                        placeholder="Enter Username"
                        onChange={this.handleInputChange}
                        required/>
                    <small className="help-block">{name.message}</small>
                  </div>
                  <div className="col-md-6">
                    <input
                        name="password"
                        type="password" value={this.state.formData.password.value}
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        required/>
                  </div>
                  <div className="col-md-6">
                    <input
                        name="password_confirmation"
                        type="password" value={this.state.formData.password_confirmation.value}
                        placeholder="Password Confirmation"
                        onChange={this.handleInputChange}
                        required/>
                    <small className="help-block">{password_confirmation.message}</small>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <button type="submit" className="btn black">Register</button>
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