import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Workouts from './components/Workouts'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



function App() {
  
  const workouts = ['pushup', 'pull up', 'sit up', 'bench press']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Workout Tracker</h1>

          <Container>
    <Nav defaultActiveKey="/" variant="tabs" fill>
        <Nav.Item>
            <Nav.Link href="/"> 
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"aboutPage"}> 
                <Link to="/about">About Us</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"workoutsPage"}> 
                <Link to="/workouts">Workouts</Link> 
            </Nav.Link>
         </Nav.Item>
    </Nav>
</Container>

        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/workouts" render={() => <Workouts workouts={workouts}/>}  />
        </div>

      </Router>

    </div>
  );
}

export default App;
