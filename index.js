function createClock(){

  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  if(hours < 10){hours = "0"+ hours;}
  if(minutes < 10){minutes = "0"+ minutes;}
  if(seconds < 10){seconds = "0"+ seconds;}

  const hoursElem = document.querySelector(".hours").innerHTML = hours;
  const minutesElem = document.querySelector(".minutes").innerHTML = minutes;
  const sevondsElem = document.querySelector(".seconds").innerHTML = seconds;
}

let time = 0;

function countdown(){
  time = setInterval(() => createClock(), 1000);
}

function clockStart(){
  countdown();
}

function clockStop(){
  clearTimeout(time);
}