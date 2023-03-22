let counter = 0;

function loadData() {
    for(let i = 0; i < db.length; i++){
        const container = document.querySelector('.main');
        const cards = document.createElement('div');
        cards.className = 'basket-flex-container';

        const html = `
        <div class="left-basket-element">
            <img class="basket-flex-element-img" src="${db[i].img}" alt="image">
        </div>
        <div class="right-basket-element">
            <div class="basket-item-counter">
                <button class="basket-item-counter-button minus">-</button>
                <input class="basket-flex-element" name="${db[i].counter}" type="text">
                <button class="basket-item-counter-button plus">+</button>
            </div>
            <p class="basket-flex-element">$${db[i].price}</p>
        </div>
    `;
    container.appendChild(cards);
    cards.innerHTML = html;
    }
};

 loadData();