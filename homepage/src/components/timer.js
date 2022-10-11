import Timer from '../images/stopwatch.png';




export default function GymLocator () {
    return(
        <div className="timer">
        
            <div class="container">
            <img src={Timer} alt='banner' width='100%'></img>
            <div class="centered">Workout Timer</div>
            <p class="bannertext">Time your workouts</p>
            </div>
    
        </div>
    )
  
  }