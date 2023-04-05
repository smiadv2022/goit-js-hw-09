// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


refInput= document.getElementById("datetime-picker");
refStart= document.querySelector('button[data-start]');
const  currentParam = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds:  document.querySelector('span[data-seconds]')
}

console.log(refStart);

const startTimer = refStart.addEventListener("click",  onStartTimer);

let selData = new Date();

refStart.disabled = true;
let diff1=0;

function controlDisable() {
  if (selData > new Date()) {
    refStart.disabled = false;
    console.log ("selData", selData)
  } else {
    refStart.disabled = true;

    Notiflix.Notify.failure('Please choose a date in the future');
  }
}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selData = selectedDates[0];
    console.log("opt",selectedDates[0]);
    // console.log("selectopt",selectedDates[0].setTime(selectedDates[0].getTime()) );
    //  diff1 = userDate.selectedDates[0] - userDate.now;
    // console.log ("diff1 opt", diff1);
    controlDisable ();
  },
};
let userDate=flatpickr(refInput, options);

// const idStart =setInterval (onStartTimer, 1000);
// let now = userDate.now;
// let  selec =userDate.selectedDates[0];
// let diff = userDate.selectedDates[0] - userDate.now;
// //  controlDisable();
//  console.log("sdiff", diff);
//  console.log("sdiff1 telo", diff1);
// const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
// const minutes = Math.floor((diff / (1000 * 60)) % 60);
// const seconds = Math.floor((diff / 1000) % 60);
// console.log("now",now.setTime(now.getTime()) );
// console.log("select",selec.setTime(selec.getTime()) );
// const nnn = new Date (selec)
// console.log("select n d", new Date (selec) );
// function currentDiff (par) { new Date() - par};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(diff1)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function onStartTimer() {
  refStart.disabled = true;

  const idInterval = setInterval(() => {
    const a = convertMs(selData.getTime() - new Date().getTime());
    if ((selData.getTime() - new Date().getTime()) <= 0) {
      clearInterval(idInterval);
      console.log(" finishhhhhhhhhhhhhhhh")
      return;}
    console.log('seldata', selData.getTime(), selData);
    console.log('new data', new Date().getTime(), new Date());
    console.log(a);

    Object.entries(a).forEach(([name, value]) => {
      // console.log("bbbb", name,value);
      currentParam.days.textContent = addLeadingZero3(a.days);
      currentParam.hours.textContent = addLeadingZero2(a.hours);
      currentParam.minutes.textContent = addLeadingZero2(a.minutes);
      currentParam.seconds.textContent = addLeadingZero2(a.seconds);
    });
     
  }, 1000);

 
}
function addLeadingZero2(number) {
  return String(number).padStart(2, 0);
}
function addLeadingZero3(number) {
  return String(number).padStart(3, 0);
}