// Elements of storage
const db = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
const dbFav = localStorage.getItem('favourite')?JSON.parse(localStorage.getItem('favourite')):[];
const category = sessionStorage.getItem('category');
const inputText = sessionStorage.getItem('inputtext');
// Add to filter
const menBtn = document.querySelector('.men-btn');
const womenBtn = document.querySelector('.women-btn');
const searchBtn = document.querySelector('.search-button');
const searchText = document.querySelector('.search-text');
// Basket counter elements
const basketCounter = document.querySelector('.counter');
const allItem = counterSum();
basketCounter.textContent = `${allItem}`;
// Sticky Nav bar elements
let navBar = document.querySelector('.nav-bar-container');
let navPos = navBar.getBoundingClientRect().top;
// Render the actual items number
function counterSum(){
  let sum = 0;
  for(let i = 0; i < db.length; i++){
      sum += db[i].counter;
  }

  return sum;
}
// Sticky Nav bar
window.addEventListener('scroll', event => {
    let scrollPos = window.scrollY;
    if(scrollPos > navPos){
        navBar.classList.add('sticky');
    } 
    else {
        navBar.classList.remove('sticky');
    }
});
// Set filter to the database
    menBtn.addEventListener('click', () => {
        sessionStorage.setItem('category','men');
    });
    womenBtn.addEventListener('click', () => {
        sessionStorage.setItem('category','women');
    });
    searchBtn.addEventListener('click',() => {
        let text = searchText.value;
        sessionStorage.setItem('inputtext', text);
    });