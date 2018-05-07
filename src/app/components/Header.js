import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import logo from '../images/logo.png';
import logInfo from '../utils/EndPoint';

export class Header extends React.Component {
  constructor(props) {
    super();
  }

  handleLogout(){
    localStorage.removeItem('jwtToken');
    <Redirect push to="/books"/>
  };


  render() {
    let isLoggedIn = logInfo.is_logged_in();

    let button = null;
    if (isLoggedIn) {
      button = <a href='javascript:void(0)' className="nav-link" onClick={() => this.handleLogout()}>Logout</a>
    } else {
      button = <Link to={"/login"} className="nav-link">Login</Link>
    }

    return (
        <header>
          <div className="main-menu">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to={"/"}><img src={logo} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="navbar-item active">
                      <Link to={"/"} className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to={"/books"} className="nav-link">Books</Link>
                    </li>
                    <li className="navbar-item">
                      <a href="about.html" className="nav-link">Categories</a>
                    </li>
                    <li className="navbar-item">
                      <a href="faq.html" className="nav-link">Authors</a>
                    </li>
                    <li className="navbar-item">
                      <a href="login.html" className="nav-link">Publishers</a>
                    </li>
                    <li className="navbar-item">
                      <a href="login.html" className="nav-link">About</a>
                    </li>
                    <li className="navbar-item">
                      { button }
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search here..."
                           aria-label="Search"/>
                    <span className="fa fa-search"/>
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </header>
    );
  }
}