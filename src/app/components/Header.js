import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <div className="main-header">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="text-muted" href="#">Subscribe</a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">Library</a>
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
            <a className="p-2 text-muted" href="#">World</a>
            <a className="p-2 text-muted" href="#">U.S.</a>
            <a className="p-2 text-muted" href="#">Technology</a>
            <a className="p-2 text-muted" href="#">Design</a>
            <a className="p-2 text-muted" href="#">Culture</a>
            <a className="p-2 text-muted" href="#">Business</a>
            <a className="p-2 text-muted" href="#">Politics</a>
            <a className="p-2 text-muted" href="#">Opinion</a>
            <a className="p-2 text-muted" href="#">Science</a>
            <a className="p-2 text-muted" href="#">Health</a>
            <a className="p-2 text-muted" href="#">Style</a>
            <a className="p-2 text-muted" href="#">Travel</a>
          </nav>
        </div>
      </div>
    );
  }
}