'use strict';   
let counter = 0;

function loadData() {
    for(let i = 0; i < data.men.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div');
        cards.className = 'flex-box';

        const html = `
            <img class="flex-element flex-element-top" src="${data.men[i].img}" alt="image">
            <p class="flex-element flex-element-bottom">$${data.men[i].price}</p>
            <button class="flex-element flex-element-bottom add-basket">Add to Basket</button>
            <span class="flex-element flex-element-bottom add-favourite">🤍</span>
    `;
    container.appendChild(cards);
    cards.innerHTML = html;
    }
    addToBasket();
};

loadData();
// Basket items counter


function addToBasket () {
    const addBasket = document.querySelectorAll('.add-basket');

    for(let i = 0; i < addBasket.length; i++){
        addBasket[i].addEventListener('click', () => {
            counter++
            basketCounter.textContent = `${db.length+1}`;
            db.push(data.men[i]);
            localStorage.setItem('items',JSON.stringify(db));
        });
    }
};

// const setCookie = function (name, item){

//   let cookieValue = '';
//   let expire = '';
//   let period = '';

//   cookieValue = `${name}=${JSON.stringify(item)}; path=/;`;
  
//   period = 365;
//   expire = new Date();
//   expire.setTime(expire.getTime() + 1000 * 3600 * 24 * period);
//   expire.toUTCString();
//   cookieValue += `expires=${expire};`;

//   document.cookie = cookieValue;
// };

// const item = {
//   id: 11,
//   path: 'men'
// }

// setCookie('items', item);
// const todoList = localStorage.getItem('.todo') ? JSON.parse(localStorage.getItem('.todo')) : [];
