function getPin() {
   const pin = Math.round(Math.random() * 10000);
   const pinstring = pin + '';
   if (pinstring.length == 4) {
      return pin;
   }
   else {
      // console.log('got three digit  and calling again', pin);
      return getPin();
   }
}

function generatePin() {
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
}

/*document.getElementById('generate-pin').addEventListener('click', function () {
   const pin = Math.round(Math.random() * 10000);
   console.log(pin);
})*/  // evabeo korte pari....ID DIYA...GENERATE BUTTON ER AGE....*****


document.getElementById('key-pad').addEventListener('click', function (event) {
   const number = event.target.innerText;
   const calcInput = document.getElementById('typed-numbers');
   if (isNaN(number)) {
      if (number == 'c') {
         calcInput.value = '';
      }

   }
   else {

      const previousNumber = calcInput.value;
      const newNumber = previousNumber + number;
      calcInput.value = newNumber;
   }
})


function varifyPin() {
   const successmessege = document.getElementById('varify-success');
   const failError = document.getElementById('varify-fail');

   const pin = document.getElementById('display-pin').value;
   const typeNumbers = document.getElementById('typed-numbers').value;
   if (pin !== 'number') {

   }
   if (pin == typeNumbers) {

      successmessege.style.display = 'block';
      failError.style.display = 'none';
   }
   else {
      successmessege.style.display = 'none';
      failError.style.display = 'block';
   }
}









// ////////////////// step-1///////////////////////////////

/*function generatePin() {
   const pin = Math.round(Math.random() * 10000);
   console.log(pin);
}

// document.getElementById('generate-pin').addEventListener('click', function () {
//    const pin = Math.round(Math.random() * 10000);
//    console.log(pin);
})*/  // evabeo korte pari....ID DIYA...GENERATE BUTTON ER AGE....


/*/ ////////////////// step-2///////////////////////////////

function getPin() {
   const pin = Math.round(Math.random() * 10000);
   const pinstring = pin + '';
   if (pinstring.length == 4) {
      return pin;
   }
   else {
      console.log('got three digit  and calling again', pin);
      return getPin();
   }
}

function generatePin() {
   const pin = getPin();
   console.log(pin);
}
*/


/*/ ////////////////// step-3///////////////////////////////

function getPin() {
   const pin = Math.round(Math.random() * 10000);
   const pinstring = pin + '';
   if (pinstring.length == 4) {
      return pin;
   }
   else {
      console.log('got three digit  and calling again', pin);
      return getPin();
   }
}

function generatePin() {
   const pin = getPin();
  document.getElementById('display-pin').value=pin;
}

// document.getElementById('generate-pin').addEventListener('click', function () {
//    const pin = Math.round(Math.random() * 10000);
//    console.log(pin);
// })  // evabeo korte pari....ID DIYA...GENERATE BUTTON ER AGE....
*/


// ?????????????????????????????????????????????calculate pin????????????
/*/ ////////////////// step-4 calc er jonno-1///////////////////////////////


document.getElementById('key-pad').addEventListener('click', function () {
   console.log('anykey clicked');
})

*/

/*/ ////////////////// step-4 calc er jonno-2///////////////////////////////


document.getElementById('key-pad').addEventListener('click', function (event) {
   console.log(event.target);
})
*/
/*/ ////////////////// step-4 calc er jonno-3///////////////////////////////


document.getElementById('key-pad').addEventListener('click', function (event) {
   console.log(event.target.innerText);
})
*/
/*/ ////////////////// step-4 calc er jonno-4///////////////////////////////


document.getElementById('key-pad').addEventListener('click', function (event) {
   const number = event.target.innerText;
   const calc = document.getElementById('typed-numbers');
   calc.value = number;
})

*/

/*/ ////////////////// step-4 calc er jonno-5///////////////////////////////


document.getElementById('key-pad').addEventListener('click', function (event) {
   const number = event.target.innerText;
   const calcInput = document.getElementById('typed-numbers');
   const previousNumber = calcInput.value;
   const newNumber = previousNumber + number;
   calcInput.value = newNumber;
})

*/
/*/ ////////////////// step-4 calc er jonno-6///////////////////////////////

document.getElementById('key-pad').addEventListener('click', function (event) {
   const number = event.target.innerText;
   const calcInput = document.getElementById('typed-numbers');
   if (isNaN(number)) {
      if (number == 'c') {
         calcInput.value = '';
      }

   }
   else {

      const previousNumber = calcInput.value;
      const newNumber = previousNumber + number;
      calcInput.value = newNumber;
   }
})*/





/*/ //////// step-5 matching pin with ganeratepin step-1/////////////////////


function varifyPin() {
   console.log('goint to verifying')
   const pin = document.getElementById('display-pin').value;
   const typeNumbers = document.getElementById('typed-numbers').value;
   if (pin == typeNumbers) {
      console.log('matched,YAY!!')
   }
   else {
      console.log('opps');
   }
}


*/
/*/ //////// step-5 matching pin with ganeratepin step-2/////////////////////


function varifyPin() {
   const successmessege = document.getElementById('varify-success');
   const failError = document.getElementById('varify-fail');

   const pin = document.getElementById('display-pin').value;
   const typeNumbers = document.getElementById('typed-numbers').value;
   if (pin !== 'number') {

   }
   if (pin == typeNumbers) {

      successmessege.style.display = 'block';
      failError.style.display = 'none';
   }
   else {
      successmessege.style.display = 'none';
      failError.style.display = 'block';
   }
}


*/