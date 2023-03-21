'use strict';
let counter = 0;

function loadData() {
    for(let i = 0; i < data.women.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div');
        cards.className = 'flex-box';

        const html = `
            <img class="flex-element flex-element-top" src="${data.women[i].img}" alt="image">
            <p class="flex-element flex-element-bottom">$${data.women[i].price}</p>
            <button class="flex-element flex-element-bottom add-basket">Add to Basket</button>
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
            db.push(data.women[i]);
            localStorage.setItem('items',JSON.stringify(db));
        });
    }
};



