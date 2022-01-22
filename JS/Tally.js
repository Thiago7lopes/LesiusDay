 /* This app is  dedicated to my father-in-law;
It`s basically a tally counter but the most important is what you`re counting =) */
// Constants below:
let count = document.querySelector('.count')
const buttonClickAdd = document.querySelector('.add')
const buttonClickSub = document.querySelector('.sub')
const buttonClickRes = document.querySelector('.reset')

// Listerners below:
buttonClickAdd.addEventListener('click', add)

buttonClickSub.addEventListener ('click',sub)

buttonClickRes.addEventListener('click', reset)

// functions

  function add (){
    const counter = count.innerHTML
    count.innerHTML = parseInt(counter) + 1;
    }

  function sub() {
      const counter = count.innerHTML
      if (parseInt(counter) >= 1) {
      count.innerHTML = parseInt(counter) - 1;}
      }

  function reset(){
    const counter = count.innerHTML
    count.innerHTML = parseInt(counter) * 0;
  }

  // Experiments:

const set= document.querySelector('.set-btn');
const input = document.querySelector('.input')

set.addEventListener('clicks', getValue());

function getValue() {
  let value = input.innerHTML;
  return input; 
}

console.log(getValue());

  // function set (){
  //   const counter = count.innerHTML
  //   count.innerHTML =
  // }
