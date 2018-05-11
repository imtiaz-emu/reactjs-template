import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import api from '../../utils/EndPoint';
import UserState from '../../state/states/user';
import LoginComponentState from '../../state/states/login.component';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginUrl = api.api_url + "auth/login";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      formData: {
        email: '',
        password: '',
        rememberMe: ''
      }
    }
  }

  handleInputChange(e) {
    let formData = Object.assign({}, this.state.formData);
    formData[e.target.name] = e.target.value;
    this.setState({formData})
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      return;
    }

    let {email, password, rememberMe} = this.state.formData;
    this.login(email, password, rememberMe);
  }

  login(email, password, rememberMe) {
    fetch(this.loginUrl, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email: email,
        password: password,
        remember_me: rememberMe
      }),
    }).then(res => res.json())
      .then(response => {
        if (typeof response.access_token === 'undefined') {
          this.props.displayErrors(response.error.user_authentication);
        } else {
          localStorage.setItem('jwtToken', response.access_token);
          this.props.updateUser(response.user);
        }

        if (!this.props.shouldDisplayError && !this.props.errors) {
          window.open('/', '_self');
        }
      }).catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <section className="static about-sec">
        <div className="container">
          <h1>My Account / Login</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the
            industry's printer took a galley of type and scrambled it to make a type specimen book. It has
            survived
            not only fiveLorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem </p>
          <div className={"alert-warning " + (this.props.display_errors ? 'alert show' : 'hidden')}
               role="alert">
            <ul>
              {/*{this.props.errors.map((error, i) => {*/}
              {/*return <li key={i}>{error}</li>*/}
              {/*})}*/}
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

const mapStateToProps = (state) => {
  return {
    user: state.appState.user,
    errors: state.appState.loginComponent.errors,
    shouldDisplayError: state.appState.loginComponent.shouldDisplayError
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser: UserState.update,
    displayErrors: LoginComponentState.displayErrors
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
