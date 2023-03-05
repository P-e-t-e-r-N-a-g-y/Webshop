'use strict';

const request = new XMLHttpRequest();
request.open('GET','http://localhost:3000/women');
request.send();

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);

    for(let i = 0; i < data.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div')

        const html = `
        <div class="flex-box">
            <img class="flex-element flex-element-top" src="${data[i].img}" alt="image">
            <p class="flex-element flex-element-bottom">${data[i].price}</p>
            <button class="flex-element flex-element-bottom">Add to Basket</button>
        </div>
    `;
    container.appendChild(cards);
    cards.innerHTML = html;
    }
});