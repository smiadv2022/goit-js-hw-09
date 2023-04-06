 import Notiflix from 'notiflix';

const refForm= document.querySelector  (".form");
// const refDelay= document.getElementById('delay');
// const refBtn= document.querySelector('button');
// const refStep = document.querySelector('[name="step"]');
// const refAmount = document.querySelector('[name="amount"]');
// console.log (refForm);
// console.log ("nn", refDelay );
// console.log ("bt", refBtn);


 refForm.addEventListener('submit', onStart);
//  refAmount.addEventListener('change', onAmount);
// refDelay.addEventListener('change', onDelay);
// refStep.addEventListener('change',onStep);

// function onDelay ()  { console.log("del",refDelay.value); return refDelay.value;};
// function onAmount ()  { console.log("am",refAmount.value);};
// function onStep ()  { 
//   console.log("step",refStep.value);
// };

function onStart(event) {
  let iPosition = 0;
  let iDelay =Number(event.currentTarget.delay.value);
  
 iDelay = Number(event.currentTarget.delay.value)*1;
  event.preventDefault();
  // console.log('11111111111', event.currentTarget.amount.value, i);
  // console.log("st",iDelay);
  // console.log("stelements",onDelay());
  while (iPosition < event.currentTarget.amount.value) {
    iPosition++;
      console.log("del-??/", iDelay);
    console.log(iPosition);
    createPromise(iPosition, iDelay);
    iDelay += Number(event.currentTarget.step.value);
  
    
  }
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
