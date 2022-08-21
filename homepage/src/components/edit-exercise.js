export default function EditExercise () {
  return(
      <div className="editExercise">
          <h1>Edit an Exercise</h1>
          <div>
          <form>
            <fieldset>
              <div>
                <label htmlFor='username'>Enter Username</label>
                <input id='username' name='username' placeholder='i.e. John123'/>
              </div>
              <div>
                  <label htmlFor='type'>Enter Type of Workout</label>
                  <input id='type' name='type' placeholder='Strength'/>
              </div>
              <div>
                  <label htmlfor='area'>Enter Body Area</label>
                  <input id='area' name='area' placeholder='Upper Body'/>
              </div>
              <div>
                  <label htmlfor='workoutName'>Enter Name of Workout</label>
                  <input id='workoutName' name='workoutName' placeholder='Bicep Curls'/>
              </div>
              <div>
                  <label htmlfor='weight'>Enter Weight (lbs)</label>
                  <input id='weight' name='weight' placeholder='30'/>
              </div>
              <div>
                  <label htmlfor='reps'>Enter number of reps</label>
                  <input id='reps' name='reps' placeholder='12'/>
              </div>
              <div>
                  <label htmlfor='reps'>Enter number of sets</label>
                  <input id='reps' name='reps' placeholder='3'/>
              </div>
              <input type='submit' value='Edit Exercise'/>
            </fieldset>
          </form>
          </div>
      </div>
  )
}
