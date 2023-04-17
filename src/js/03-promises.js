import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('.form');
inputForm.addEventListener('submit', onSubmitClick)

let firstDelay = inputForm.elements.delay;
let nextDelay = inputForm.elements.step;
let amountStepOfPromise = inputForm.elements.amount;


function onSubmitClick(event) {
  event.preventDefault();
   
  let delay = Number(firstDelay.value);

  for (let i = 0; i < amountStepOfPromise.value; i += 1) {
    
    createPromise(i + 1, delay)
    .then(result => {Notify.success(result);})
    .catch(error => {Notify.failure(error);});
        
    delay += Number(nextDelay.value);
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
       if (shouldResolve) {
         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`) ;
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    });

    
}
