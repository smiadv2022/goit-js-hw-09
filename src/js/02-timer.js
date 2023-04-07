// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refInput = document.getElementById('datetime-picker');

const refStart = document.querySelector('button[data-start]');
const currentParam = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const startTimer = refStart.addEventListener('click', onStartTimer);

let selData = new Date();

refStart.disabled = true;
// let diff = 0;

function controlDisable() {
  if (selData > new Date()) {
    refStart.disabled = false;
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

    controlDisable();
  },
};
let userDate = flatpickr(refInput, options);

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

function onStartTimer() {
  refStart.disabled = true;

  const idInterval = setInterval(() => {
    const diffObj = convertMs(selData.getTime() - new Date().getTime());
    if (selData.getTime() - new Date().getTime() <= 0) {
      clearInterval(idInterval);

      return;
    }

    Object.entries(diffObj).forEach(([name, value]) => {
      currentParam.days.textContent = addLeadingZero3(diffObj.days);
      currentParam.hours.textContent = addLeadingZero2(diffObj.hours);
      currentParam.minutes.textContent = addLeadingZero2(diffObj.minutes);
      currentParam.seconds.textContent = addLeadingZero2(diffObj.seconds);
    });
  }, 1000);
}
function addLeadingZero2(number) {
  return String(number).padStart(2, 0);
}
function addLeadingZero3(number) {
  return String(number).padStart(3, 0);
}
