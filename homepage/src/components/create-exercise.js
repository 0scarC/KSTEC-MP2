export default function CreateExercise () {
  return(
      <div className="createExercise">
          <h1>Create an Exercise</h1>
          <div>
          <form>
            <fieldset>
              <div>
                <label htmlFor='username'>Enter Username</label>
                <input id='username' name='username' placeholder='i.e. John123'/>
              </div>
              <div>
                  <label htmlFor='type'>Enter Type of Workout</label>
                  <input id='type' name='type' placeholder='150'/>
              </div>
              <div>
                  <label htmlfor='area'>Enter Body Area</label>
                  <input id='area' name='area' placeholder='70'/>
              </div>
              <div>
                  <label htmlfor='workoutName'>Enter Name of Workout</label>
                  <input id='workoutName' name='workoutName' placeholder='70'/>
              </div>
              <div>
                  <label htmlfor='weight'>Enter Weight (lbs)</label>
                  <input id='weight' name='weight' placeholder='70'/>
              </div>
              <div>
                  <label htmlfor='reps'>Enter number of reps</label>
                  <input id='reps' name='reps' placeholder='70'/>
              </div>
              <input type='submit' value='Add Exercise'/>
            </fieldset>
          </form>
          </div>
      </div>
  )
}