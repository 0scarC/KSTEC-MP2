import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';


import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Routes> 
      <Route path="/" exact element={<ExercisesList />} />
      <Route path="/edit/:id" element={<EditExercise />} />
      <Route path="/create" element={<CreateExercise />} />
      <Route path="/user" element={<CreateUser />} />
      </Routes>
      </div>
    </Router>

  );
}

export default App;