// Elements of storage
const db = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
const dbFav = localStorage.getItem('favourite')?JSON.parse(localStorage.getItem('favourite')):[];
const category = sessionStorage.getItem('category');
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
const hambToggle = document.querySelector('.nav-toggle');
// Render the actual items number
function counterSum(){
  let sum = 0;
  for(let i = 0; i < db.length; i++){
      sum += db[i].counter;
  }

  return sum;
}

function textWrapper() {
    let text = searchText.value;
    let textArray = text.split(' ');
    console.log(textArray);
    for(let i = 0; i < textArray.length; i++){
        if(textArray[i] === "men"){
            sessionStorage.setItem('category', "men");
            location.reload();
        }
        else if(textArray[i] === "women"){
            sessionStorage.setItem('category', "women");
            location.reload();
        }
        if(textArray[i] !== "men" && textArray[i] !== "women"){
            title = textArray

        }
    }
}

// Sticky Nav bar
window.addEventListener('scroll', (event) => {
    let scrollPos = window.scrollY;
    if(scrollPos > navPos){
        navBar.classList.add('sticky');
    } 
    else {
        navBar.classList.remove('sticky');
    }
});

hambToggle.addEventListener('click', () => {
    
})

// Set filter to the database
    menBtn.addEventListener('click', () => {
        sessionStorage.setItem('category','men');
    });
    womenBtn.addEventListener('click', () => {
        sessionStorage.setItem('category','women');
    });
    searchText.addEventListener('keypress', (e)=>{
        if(e.key === "Enter"){
            textWrapper();
        }
    });
