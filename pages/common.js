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

// Sticky Nav bar elements
let navBar = document.querySelector('.nav-bar-container');
let navPos = navBar.getBoundingClientRect().top;
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

// Loading the cards

    // const searchButton = document.querySelector('.search-button');
    const searchText = document.querySelector('.search-text');
    const menBtn = document.querySelector('.men-btn');
    const womenBtn = document.querySelector('.women-btn');
    let category = "";
    // let text = searchText.value;

    // searchButton.addEventListener('click', searchBar)
    menBtn.addEventListener('click', () => category = "women");
    womenBtn.addEventListener('click', () => category = "women");