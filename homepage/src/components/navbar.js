import { Link } from 'react-router-dom';


var util = {
  mobileMenu() {
    $("#nav").toggleClass("nav-visible");
  },
  windowResize() {
    if ($(window).width() > 800) {
      $("#nav").removeClass("nav-visible");
    }
  },
  scrollEvent() {
    var scrollPosition = $(document).scrollTop();
    
    $.each(util.scrollMenuIds, function(i) {
      var link = util.scrollMenuIds[i],
          container = $(link).attr("href"),
          containerOffset = $(container).offset().top,
          containerHeight = $(container).outerHeight(),
          containerBottom = containerOffset + containerHeight;

      if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
        $(link).addClass("active");
      } else {
        $(link).removeClass("active");
      }
    });
  }
};

$(document).ready(function() {
  
  util.scrollMenuIds = $("a.nav-link[href]");
  $("#menu").click(util.mobileMenu);
  $(window).resize(util.windowResize);
  $(document).scroll(util.scrollEvent);
  
});





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
<<<<<<< HEAD
      <li className="nav-user-create">
      <Link to="/user" className="nav-link">Create User</Link>
=======
      <li className="navbar-item">
      <Link to="/edit" className="nav-link">Edit an Exercise</Link>
      </li>
      <li className="navbar-item">
      <Link to="/user" className="nav-link">Create a User</Link>
>>>>>>> fdfb56f9cbeffe27856d1f2b787d2012c45981ec
      </li>
      <li className="nav-bmi-calc"
      <Link to="/user" className="nav-link">Calculate BMI </Link>
    </ul>
    </div>
  </nav>
  )
