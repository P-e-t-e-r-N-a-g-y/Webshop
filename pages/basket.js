let counter = 0;
// Load the basket items from local storage
function loadData() {
    for(let i = 0; i < db.length; i++){
        const containerLeft = document.querySelector('.basket-left');
        const containerRight = document.querySelector('.basket-right');
        const cards = document.createElement('div');
        cards.className = 'basket-left-element';
        const totalAmount = basketTotalAmount();
        let sumitems = 0;
// Calculate the items amount
        sumitems = db[i].price*db[i].counter;
        const html = `
        <div class="left-basket-element">
            <img class="basket-flex-element-img" src="${db[i].img}" alt="image">
        </div>
        <div class="right-basket-element">
            <div class="basket-item-counter">
                <button class="basket-item-counter-button minus">-</button>
                <input class="basket-item-text" name="${db[i].counter}" type="text">
                <button class="basket-item-counter-button plus">+</button>
            </div>
            <p class="basket-flex-element">$${sumitems}</p>
        </div>

    `;

    const htmlTotalAmount = `
        <p class="basket-right-amount">Total amount: $${totalAmount}</p>
    `
    containerLeft.appendChild(cards);
    cards.innerHTML = html;

    containerRight.innerHTML = htmlTotalAmount;
    }
};

 loadData();

function basketTotalAmount() {
    let sum = 0;

    for(let i = 0; i < db.length; i++){
        sum += db[i].price*db[i].counter;
    }

    return sum;
}