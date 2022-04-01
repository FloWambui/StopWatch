// Time values Variables
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = document.querySelector(".clock")
let int = null;

let displayMilsec = 0;
let dislpaySecs = 0;
let displayMins = 0;
let displayHrs = 0;

// Incrementing Values
function timerEl() {
  milliseconds++;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  if(milliseconds < 10){
      displayMilsec = "0" + milliseconds.toString();
  }
  else{
      displayMilsec = milliseconds;
  }
  if(seconds < 10){
      dislpaySecs = "0" + seconds.toString();
  }
  else{
      dislpaySecs = seconds;
  }
  if(minutes < 10){
      displayMins = "0" + minutes.toString();
  }
  else{
      displayMins = minutes;
  }
  if(displayHrs < 10){
      displayHrs = "0" + hours.toString();
  }
  else{
      displayHrs = hours;
  }


//   Displaying Updated time values
document.getElementById("clock").innerText = displayHrs + ":" + displayMins +":" + dislpaySecs +":" + displayMilsec;
}
// window.setInterval(timerEl);


document.getElementById("start").addEventListener("click", () =>{
  if(int!==null){
    clearInterval(int);
  }
  int=setInterval(timerEl,)
});

document.getElementById("stop").addEventListener("click", () =>{
  clearInterval(int);
});

document.getElementById("reset").addEventListener("click", ()=>{
  clearInterval(int);
  [milliseconds,seconds,minutes,hours] = [0,0,0,0];
  timer.innerHTML = "00 : 00 : 00 : 00";
});