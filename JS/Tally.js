 /* This is a web app to dedicated to my father-in-law;
It`s basically a tally counter but the most important is what you`re counting =) */

// Constants below:
let count = document.querySelector('.count')
const buttonClickAdd = document.querySelector('.add')
const buttonClickSub = document.querySelector('.sub')
const buttonClickRes = document.querySelector('.reset')

// Listerners below:
buttonClickAdd.addEventListener('click', () => {
  let counter = count.innerHTML
  count.innerHTML = parseInt(counter) + 1;})

// buttonClickRem.addEventListener ('click',() => {
//   let counter= count.innerHTML
//   count.innerHTML = parseInt(counter) - 1;})

buttonClickSub.addEventListener ('click',sub)

buttonClickRes.addEventListener('click', () => {
  let counter= count.innerHTML;
  count.innerHTML = parseInt(counter) * 0;})

  // No negative numbers
  function sub() {
      let counter = count.innerHTML
      if (parseInt(counter) >= 1) {
      count.innerHTML = parseInt(counter) - 1;}
      }



  // buttomClick.addEventListener('click', () => {
  //   count.style.border = 'solid 2px red';
  // }); Linkado! Use se quebrar.

  // buttomClickAdd.addEventListener('click', add);
  // buttomClickRem.addEventListener ('click',sub);
  //
  // function add() {
  //   let counter = count.innerHTML
  //   count.innerHTML = parseInt(counter) + 1;

  // }
  // function sub() {
  //   let counter = count.innerHTML
  //   count.innerHTML = parseInt(counter) -1;
  //
  // }
