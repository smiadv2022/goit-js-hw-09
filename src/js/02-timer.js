// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
refInput= document.getElementById("datetime-picker");
refStart= document.querySelector('button[data-start]');
console.log(refStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log("opt",selectedDates[0]);

  },
};
let userDate=flatpickr(refInput, options);
let now = userDate.now;
let  selec =userDate.selectedDates[0];
let diff = userDate.selectedDates[0] - userDate.now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);
console.log("now",now.setTime(now.getTime()) );
console.log("select",selec.setTime(selec.getTime()) );