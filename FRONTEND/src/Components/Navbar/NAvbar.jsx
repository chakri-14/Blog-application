import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/"><b>Blog Up</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Write">Write a blog</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    <hr/>
    </div>
  );
}

export default Navbar;
