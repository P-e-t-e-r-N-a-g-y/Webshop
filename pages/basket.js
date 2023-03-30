const delButton = document.querySelector('.delete-button');

// Load the basket items from local storage
function loadData() {
    for(let i = 0; i < db.length; i++){
        const containerLeft = document.querySelector('.basket-left');
        const containerRight = document.querySelector('.basket-right');
        const cards = document.createElement('div');
        cards.className = 'basket-left-element';
        const totalAmount = basketTotalAmount();
// Calculate the items amount
        let sumitems = sumItems(i);
        const html = `
        <div class="left-basket-element">
            <img class="basket-flex-element-img" src="${db[i].img}" alt="image">
        </div>
        <div class="right-basket-element">
            <div class="basket-item-counter">
                <button class="basket-item-counter-button minus">-</button>
                <span class="basket-item-text">${db[i].counter}</span>
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

function sumItems(i){
    let sumitems = 0;

    sumitems = db[i].price*db[i].counter;

    return sumitems;
}

function basketTotalAmount() {
    let sum = 0;

    for(let i = 0; i < db.length; i++){
        sum += db[i].price*db[i].counter;
    }

    return sum;
}

function manageBasketItemsNumber() {
    const plusButton = document.querySelectorAll('.plus');
    const minusButton = document.querySelectorAll('.minus');
    const text = document.querySelectorAll('.basket-item-text');
    const amount = document.querySelectorAll('.basket-flex-element');
    const totalAm = document.querySelector('.basket-right-amount');

    for(let i = 0; i < plusButton.length; i++){
        plusButton[i].addEventListener('click', () => {
            db[i].counter += 1;
            localStorage.setItem('items', JSON.stringify(db));
            text[i].textContent = db[i].counter;
            let sumitems = sumItems(i);
            amount[i].textContent = `$${sumitems}`;
            let totalAmount = basketTotalAmount();
            totalAm.textContent = `Total amount: $${totalAmount}`;
        });

        minusButton[i].addEventListener('click', () => {
            if(db[i].counter > 0){
                db[i].counter -= 1;
                localStorage.setItem('items', JSON.stringify(db));
                text[i].textContent = db[i].counter;
                let sumitems = sumItems(i);
                amount[i].textContent = `$${sumitems}`;
                let totalAmount = basketTotalAmount();
                totalAm.textContent = `Total amount: $${totalAmount}`;
            }
            if(db[i].counter === 0){
                db.splice(i,1);
                localStorage.setItem('items', JSON.stringify(db));
                location.reload();
            }
        });
    }
}

// Check your basket is empty
if(db.length === 0){
    localStorage.removeItem('items');
    const emptyBasket = '<h1>Your Basket is empty!</h1>';
    const container = document.querySelector('.basket-flex-container');

    container.innerHTML = emptyBasket;
}
else{
    window.onload = () =>{
        loadData();
        manageBasketItemsNumber();
    }
}

delButton.addEventListener('click', () => {
    const popUp = document.querySelector('.popup');
    const yesBtn = document.querySelector('.yes-button');
    const noBtn = document.querySelector('.no-button');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    popUp.style.display = 'block';
    main.style.opacity = 0.1;
    footer.style.opacity = 0.1;

    yesBtn.addEventListener('click', () => {
        localStorage.removeItem('items');
        location.reload();
        popUp.style.display = 'none';
        main.style.opacity = 1;
        footer.style.opacity = 1;
    });

    noBtn.addEventListener('click', () => {
        popUp.style.display = 'none';
        main.style.opacity = 1;
        footer.style.opacity = 1;
    });
});