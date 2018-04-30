import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <div className="main-header">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
            </div>
            <div className="col-4 text-center">
              <Link className="blog-header-logo text-dark" to={"/"}>Library</Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="mx-3">
                  <circle cx="10.5" cy="10.5" r="7.5"></circle>
                  <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
            </div>
          </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="#">Categories</a>
            <a className="p-2 text-muted" href="#">Authors</a>
            <a className="p-2 text-muted" href="#">Publishers</a>
            <Link className="p-2 text-muted" to={"/books"}>Books</Link>
            <a className="p-2 text-muted" href="#">Contests</a>
          </nav>
        </div>
      </div>
    );
  }
}