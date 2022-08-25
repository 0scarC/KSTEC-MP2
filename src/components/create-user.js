import React, { Component } from 'react';
import axios from 'axios';
import BuffGuy from '../images/workout.jpg'

const port = process.env.PORT

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post(`http://localhost:${port}/users/add`, user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <img src={BuffGuy} alt='banner' width='100%'></img>
          <div className="centered">Create A New User</div>
          <p className="bannertext">Start keeping track of your workouts.</p>
        </div>
        <fieldset className="container1">
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label className='username'>Enter Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-dark" />
          </div>
        </form>
        </fieldset>
      </div>
    )
  }
}



