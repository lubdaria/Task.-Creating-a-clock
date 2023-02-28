function createClock(){
  const date = new Date();

  const time = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  let currentTime = [time[0],time[1],time[2]].join(':');

  const clockElem = document.createElement('div');
  const clock = document.createElement('span');

  document.body.prepend(clockElem);
  clockElem.prepend(clock);
  clock.innerHTML = currentTime;
  // setTimeout(() => createClock(), 1000); 
}

console.log(createClock());