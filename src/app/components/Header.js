import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="main-menu">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                <a href="login.html" className="nav-link">FAQ</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search here..." aria-label="Search" />
                            <span className="fa fa-search" />
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    );
  }
}