const onStartBTN = document.querySelector('[data-start]');
const StopBTN = document.querySelector('[data-stop]');

let timerId = null;

onStartBTN.addEventListener("click", changeColor);
StopBTN.addEventListener("click", stopColor);

function changeColor() {
    timerId = setInterval(interval, 1000);
}

function interval() {
    console.log('start button')
    document.body.style.backgroundColor = getRandomHexColor();
    onStartBTN.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function stopColor() {

    clearInterval(timerId);
    onStartBTN.removeAttribute('disabled');
}