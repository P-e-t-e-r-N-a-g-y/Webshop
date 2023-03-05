'use strict';

const request = new XMLHttpRequest();
request.open('GET','http://localhost:3000/men');
request.send();

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);

    for(let i = 0; i < data.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div');
        cards.className = 'flex-box';

        const html = `
            <img class="flex-element flex-element-top" src="${data[i].img}" alt="image">
            <p class="flex-element flex-element-bottom">${data[i].price}</p>
            <button class="flex-element flex-element-bottom add-basket">Add to Basket</button>
    `;
    container.appendChild(cards);
    cards.innerHTML = html;
    }
    counterIncrement();
});

// Basket items counter
function counterIncrement () {
    let basketCounter = document.getElementById('counter');
    let addBasket = document.querySelectorAll('.add-basket');
    let counter = 0;

    for(let i = 0; i < addBasket.length; i++){
        addBasket[i].addEventListener('click', () => {
            counter++; 
            basketCounter.textContent = `${counter}`;
        });
    }
};



