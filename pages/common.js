const db = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
const dbFav = localStorage.getItem('favourite')?JSON.parse(localStorage.getItem('favourite')):[];
const basketCounter = document.querySelector('.counter');
const allItem = counterSum();
basketCounter.textContent = `${allItem}`;

function counterSum(){
  let sum = 0;
  for(let i = 0; i < db.length; i++){
      sum += db[i].counter;
  }

  return sum;
}

// Login
let loginBox = document.getElementById('login-box');
let main = document.getElementById('main');

document.querySelector('.login-btn').addEventListener('click', () => {
    loginBox.style.display = 'block';
    main.style.opacity = 0.4;
})

document.querySelector('.close-btn').addEventListener('click', () => {
    loginBox.style.display = 'none';
    main.style.opacity = 1;
})

// Sticky Nav bar elements
let navBar = document.querySelector('.nav-bar-container');
let navPos = navBar.getBoundingClientRect().top;
// Sticky Nav bar
window.addEventListener('scroll', e => {
    let scrollPos = window.scrollY;
    if(scrollPos >= navPos){
        navBar.classList.add('sticky');
    } 
    if(scrollPos === navPos) {
        navBar.classList.remove('sticky');
    }
});