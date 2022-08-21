import { Link } from 'react-router-dom';




export default function Navbar () {
  return(
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">Workout Tracker</Link>
    <div className="collpase navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-exercises">
      <Link to="/" className="nav-exercise">Exercises</Link>
      </li>
      <li class name="nav-create-exercise"
      <Link to="/create" className="nav-link">Create an Exercise</Link>
      <li className="nav-timer">
      <Link to="/create" className="nav-link">Timer</Link>
      </li>
      <li className="nav-user-create">
      <Link to="/user" className="nav-link">Create User</Link>
      </li>
      <li className="nav-bmi-calc"
      <Link to="/user" className="nav-link">Calculate BMI </Link>
    </ul>
    </div>
  </nav>
  )
