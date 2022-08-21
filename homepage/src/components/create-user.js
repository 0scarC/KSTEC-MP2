export default function CreateUser () {
  return(
      <div className='createUser'>
        <main>
          <h1>Create a User</h1>
          <form>
            <fieldset>
              <div>
                <label htmlFor='username'>Enter Username</label>
                <input id='username' name='username' placeholder='i.e. John123'/>
              </div>
              <div>
                <div>
                  <label htmlFor='userWeight'>Enter Weight (lbs)</label>
                  <input id='userWeight' name='userWeight' placeholder='150'/>
                </div>
                <div>
                  <label htmlfor='userHeight'>Enter Height (in)</label>
                  <input id='userHeight' name='userHeight' placeholder='70'/>
                </div>
              </div>
              <input type='submit' value='Add User'/>
            </fieldset>
          </form>
        </main>

      </div>
  )

}