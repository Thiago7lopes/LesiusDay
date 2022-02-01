 /* This app is  dedicated to my father-in-law;
It`s basically a tally counter but the most important is what you`re counting =) */

// Constants below:
let count = document.querySelector('.count')
const buttonClickAdd = document.querySelector('.add')
const buttonClickSub = document.querySelector('.sub')
const buttonClickRes = document.querySelector('.reset')
const set= document.querySelector('.set-btn');
const input = document.querySelector('.input')

// Listerners below:
buttonClickAdd.addEventListener('click', add)

buttonClickSub.addEventListener ('click',sub)

buttonClickRes.addEventListener('click', reset)

set.addEventListener('click', setValue)

input.addEventListener('keydown', setField)


// functions Below:

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

    function setValue(){
      if(input.value !="" &&"+" && "-" ){
      const counter = input.value
      count.innerHTML = parseInt(counter)
      input.value = ""
    }
}

    function setField(event) {
      if (event.keyCode === 13 && input.value !="" &&"+" && "-" ()) {
        event.preventDefault(); // This line removes the implicit submision from the form while pressing enter;
        const counter = input.value
        count.innerHTML = parseInt(counter)
        input.value = ""
      }
    }


// Sound Player

// const sound = new Audio();
// sound.src = "../Media/kurwa.mp3"
