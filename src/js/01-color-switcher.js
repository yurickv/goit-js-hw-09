const onStartBTN = document.querySelector('[data-start]');
const StopBTN = document.querySelector('[data-stop]');

let timerId = null;

onStartBTN.addEventListener("click", interval);
StopBTN.addEventListener("click", stopColor);

function interval() {
    timerId = setInterval(changeColor, 1000);
}

function changeColor() {
    console.log('start button')
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    onStartBTN.setAttribute('disabled', 'disabled');
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

function stopColor() {

    clearInterval(timerId);
    onStartBTN.removeAttribute('disabled');
}