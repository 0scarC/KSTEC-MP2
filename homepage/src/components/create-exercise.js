import React, { Component } from 'react';

export default function CreateExercise(data) {
  //refactor workout name in HTML to switch avaiable workouts depending on workout type and area choosen
  let workoutName = ``
  switch (data.type) {
    case 'select':
      workoutName = (
        <select id='workoutName' name='workoutName'>
          <option value='select'>Select</option>
        </select>
      )
      break
    case 'cardio':
      data.area = 'N/A'
      workoutName = (
        <select id='workoutName' name='workoutName'>
          <option value='walk'>Walk</option>
          <option value='jog'>Jog</option>
          <option value='marathon'>Marathon</option>
        </select>
      )
      break
    case 'endurance':
    case 'strength':
      switch (data.area) {
        case 'core':
          workoutName = (
            <select id='workoutName' name='workoutName'>
              <option value='planks'>Planks</option>
              <option value='sixInches'>6 Inches</option>
            </select>
          )
          break
        case 'lower':
          workoutName = (
            <select id='workoutName' name='workoutName'>
              <option value='squats'>Squats</option>
            </select>
          )
          break
        case 'upper':
          workoutName = (
            <select id='workoutName' name='workoutName'>
              <option value='bench-press'>Bench Press</option>
              <option value='bicep-curls'>Bicep Curls</option>
              <option value='overhead-press'>Overhead Press</option>
            </select>
          )
          break
      }
      break
  }

  return(
      <div className="createExercise">
          <main>
            <h1>Create an Exercise</h1>
            <form>
              <fieldset>
                <div>
                  <label htmlFor='type'>Workout Type</label>
                  <select id='type' name='type'>
                    <option value='select'>Select</option>
                    <option value='cardio'>Cardio</option>
                    <option value='endurance'>Endurance</option>
                    <option value='strength'>Strength</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='area'>Muscle Area</label>
                  <select id='area' name='area'>
                    <option value='select'>Select</option>
                    <option value='N/A'>N/A</option>
                    <option value='upper'>Upper Body</option>
                    <option value='lower'>Lower Body</option>
                    <option value='core'>Core</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='workoutName'>Workout</label>
                  {workoutName}
                  <select id='workoutName' name='workoutName'>
                    <option value='select'>Select</option>
                    <option value='walk'>Walk</option>
                    <option value='jog'>Jog</option>
                    <option value='marathon'>Marathon</option>
                    <option value='planks'>Planks</option>
                    <option value='sixInches'>6 Inches</option>
                    <option value='squats'>Squats</option>
                    <option value='bench-press'>Bench Press</option>
                    <option value='bicep-curls'>Bicep Curls</option>
                    <option value='overhead-press'>Overhead Press</option>
                  </select>
                </div>
                <div>
                  <div>
                    <label htmlFor='weight'>Weight</label>
                    <input id='weight' name='weight' value='user weight divided by number appropriate for workout selected, can be changed in this input'/>
                  </div>
                  <div>
                    <label htmlFor='reps'>Reps</label>
                    <input id='reps' name='reps' value='depends on workout type selected, can be changed in this input'/>
                  </div>
                </div>
                <input type='submit' value='Add Workout'/>
              </fieldset>
            </form>
          </main>
      </div>
  )

}