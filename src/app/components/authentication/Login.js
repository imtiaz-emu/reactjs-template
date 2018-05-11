import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import api from '../../utils/EndPoint';
import {updateUser} from '../../utils/actions';
import {connect} from "react-redux";
import{ bindActionCreators } from 'redux';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            formData: {
                email: '',
                password: '',
                remember_me: ''
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

        const {email, password, remember_me} = this.state.formData;
        const url = api.api_url + "auth/login";

        this.props.updateUser(url, email, password, remember_me);

        if (!this.props.display_errors) {
            this.props.history.push({
                pathname: '/',
                state: {message: response.message}
            });
        }
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
        currentUser: state.currentUser,
        display_errors: state.display_errors,
        errors: state.errors
    }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateUser}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);