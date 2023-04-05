const refStart = document.querySelector('button[data-start');

const refStop = document.getElementById('stop');

let id = 0;

refStop.disabled = true;
refStart.disabled = false;
refStart.addEventListener('click', startColor);
refStop.addEventListener('click', stopColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function startColor() {
  id = setInterval(a => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refStart.disabled = true;
  refStop.disabled = false;
}
function stopColor() {
  refStart.disabled = false;
  refStop.disabled = true;

  clearInterval(id);
}
