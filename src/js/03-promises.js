import Notiflix from 'notiflix';

const refForm = document.querySelector('.form');

refForm.addEventListener('submit', onStart);

function onStart(event) {
  let iPosition = 0;
  let iDelay = Number(event.currentTarget.delay.value);

  iDelay = Number(event.currentTarget.delay.value) * 1;
  event.preventDefault();

  while (iPosition < event.currentTarget.amount.value) {
    iPosition++;

    createPromise(iPosition, iDelay);
    iDelay += Number(event.currentTarget.step.value);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  promise.then(
    (result) =>
      Notiflix.Notify.success(result),
    (err) =>
      Notiflix.Notify.failure(err)
  );
}
