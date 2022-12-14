import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Banner from '../images/user.jpg'

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.type}</td>
    <td>{props.exercise.area}</td>
    <td>{props.exercise.workoutName}</td>
    <td>{props.exercise.weight}</td>
    <td>{props.exercise.reps}</td>
    <td>{props.exercise.sets}</td>
    <td>{props.exercise.date}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}> Edit </Link> 
      <Link to={"/"} onClick={() => { props.deleteExercise(props.exercise._id) }}> Delete </Link>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
       <div>
        <div class="container">
          <img src={Banner} alt='banner' width='100%'></img>
          <div class="centered">Workout Tracker</div>
          <p class="bannertext">The grind never stops.</p>
        </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Type</th>
              <th>Area</th>
              <th>Workout Name</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Sets</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}