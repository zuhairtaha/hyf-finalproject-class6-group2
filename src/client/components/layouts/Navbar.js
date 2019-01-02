import React from 'react'

const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">HFY Final Project</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div id="navbarNavDropdown" className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">link 2</a>
          </li>

        </ul>
        <ul className="navbar-nav">
          {/*<li className="nav-item dropdown">*/ }
          {/*<a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"*/ }
          {/*data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/ }
          {/*Dropdown*/ }
          {/*</a>*/ }
          {/*<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">*/ }
          {/*<a className="dropdown-item" href="#">Action</a>*/ }
          {/*<a className="dropdown-item" href="#">Another action</a>*/ }
          {/*</div>*/ }
          {/*</li>*/ }
          <li className="nav-item">
            <a className="nav-link" href="/Mentors/">Mentors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/classes/">Classes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/js/">JavaScript</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/jquery/">jQuery</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

)

export default Navbar
