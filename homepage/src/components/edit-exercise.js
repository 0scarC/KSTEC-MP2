import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeArea = this.onChangeArea.bind(this);
    this.onChangeworkoutName = this.onChangeworkoutName.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeReps = this.onChangeReps.bind(this);
    this.onChangeSets = this.onChangeSets.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.state = {
      username: '',
      type: '',
      area: '',
      workoutName: '',
      weight: '',
      reps: '',
      sets: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          type: response.data.type,
          area: response.data.area,
          workoutName: response.data.workoutName,
          weight: response.data.weight,
          reps: response.data.reps,
          sets: response.data.sets,
          date: new Date(response.data.date)
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })


    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    })
  }

  onChangeArea(e) {
    this.setState({
      area: e.target.value
    })
  }

  onChangeworkoutName(e) {
    this.setState({
      workoutName: e.target.value
    })
  }
  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    })
  }

  onChangeReps(e) {
    this.setState({
        reps: e.target.value
    })
  }

  onChangeSets(e) {
    this.setState({
      sets: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      type: this.state.type,
      area: this.state.area,
      workoutName: this.state.workoutName,
      weight: this.state.weight,
      reps: this.state.reps,
      sets: this.state.sets,
      date: this.state.date,
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }
  

  render() {
    return (
    <div>
      <h3>Edit an Exercise</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Type: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}
              />
        </div>
        <div className="form-group">
          <label>Area: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.area}
              onChange={this.onChangeArea}
              />
        </div>
        <div className="form-group">
          <label>Workout Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.workoutName}
              onChange={this.onChangeworkoutName}
              />
        </div>
        <div className="form-group">
          <label>Weight: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
              />
        </div>
        <div className="form-group">
          <label>Reps: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.reps}
              onChange={this.onChangeReps}
              />
        </div>
        <div className="form-group">
          <label>Sets: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.sets}
              onChange={this.onChangeSets}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit an Exercise" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}