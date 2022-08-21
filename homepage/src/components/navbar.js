import { Link } from 'react-router-dom';

export default function Navbar () {
  return(
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">Workout Tracker</Link>
    <div className="collpase navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
      <Link to="/" className="nav-link">Exercises</Link>
      </li>
      <li className="navbar-item">
      <Link to="/create" className="nav-link">Create an Exercise</Link>
      </li>
      <li className="navbar-item">
      <Link to="/edit" className="nav-link">Edit an Exercise</Link>
      </li>
      <li className="navbar-item">
      <Link to="/user" className="nav-link">Create a User</Link>
      </li>
    </ul>
    </div>
  </nav>
  )

}