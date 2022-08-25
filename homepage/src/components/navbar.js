import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
  return(
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">Workout Tracker</Link>
    <div className="collpase navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
      <Link to="/" className="nav-link">Exercise Log</Link>
      </li>
      <li className="navbar-item">
      <Link to="/user" className="nav-link">Create a User</Link>
      </li>
      <li className="navbar-item">
      <Link to="/create" className="nav-link">Log an Exercise</Link>
      </li>
    </ul>
    </div>
  </nav>
 );
}
}