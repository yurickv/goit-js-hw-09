import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const toChoseDate = document.querySelector('#datetime-picker');
const onStartBTN = document.querySelector('[data-start]');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


onStartBTN.setAttribute('disabled', 'disabled');

onStartBTN.addEventListener("click", timer);

let targetDate = null;
let timerCountTime = 0;


setTimeout(() => {
    Notify.info('Choose your timer!!!');
}, 2000);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(typeof selectedDates[0]);
    //   console.log(typeof selectedDates);
    //   console.log(typeof selectedDates[0].getTime());
      if (selectedDates[0].getTime() <= Date.now()) {
          Notify.failure("Please choose a date in the future");
          isValid = false;
          onStartBTN.setAttribute('disabled', 'disabled');
          return;
        }
      
      Notify.success('For start timer press button "Start"');
      targetDate = selectedDates[0].getTime();
      onStartBTN.removeAttribute('disabled');
    },
};

flatpickr(toChoseDate, options);

function timer() {
    if (!onStartBTN.getAttribute('disabled')) {
        let timerId = setInterval(() => {
        
        timerCountTime = targetDate - Date.now(); 
        console.log(timerCountTime)
        onDisplayData(convertMs(timerCountTime));  
            
        if (timerCountTime < 1000) {
            clearInterval(timerId);
            Notify.info('Timer off');
        }

        }, 1000);
        onStartBTN.setAttribute('disabled', 'disabled'); 

        
        
    }
    
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function onDisplayData({ days, hours, minutes, seconds }) {
    dataDays.textContent = days;
    dataHours.textContent = hours;
    dataMinutes.textContent = minutes;
    dataSeconds.textContent = seconds;
}


function addZero(value) {
  return String(value).padStart(2, '0');
}