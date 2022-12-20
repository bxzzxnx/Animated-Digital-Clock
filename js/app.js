const hoursContainer = document.querySelector('.hours');
const minutesContainer = document.querySelector('.minutes');
const secondsContainer = document.querySelector('.seconds');

const formatDate = date => String(date).length === 1 ? `0${date}` : date;

const insertHours = (hours, minutes, seconds) => {
  hoursContainer.textContent = formatDate(hours)
  minutesContainer.textContent = formatDate(minutes)
  secondsContainer.textContent = formatDate(seconds);
};

const animate = container => {
  container.style.transform = 'rotateX(180deg)'
  setTimeout(() =>{
    container.style.transform = 'rotateX(0deg)'
  }, 100)
};

const date = new Date();
const hours =  date.getHours()
const minutes = date.getMinutes()
let minutesPlusOne = minutes+1
let hoursPlusOne = hours+1;

const animateHoursAndMinutes = (hours, minutes) => {
  if (minutesPlusOne === minutes) {
    animate(minutesContainer)
    minutesPlusOne++
  }

  if (hoursPlusOne === hours) {
    animate(hoursContainer)
    hoursPlusOne++
  }
};

const showClock = () => {
  const date = new Date();
  const hours =  date.getHours();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();

  hoursPlusOne === 24? hoursPlusOne = 0 : hoursPlusOne;
  minutesPlusOne === 60 ? minutesPlusOne = 0 : minutesPlusOne;

  animate(secondsContainer);
  animateHoursAndMinutes(hours,minutes);
  insertHours(hours,minutes,seconds)
}

setInterval(showClock, 1000)