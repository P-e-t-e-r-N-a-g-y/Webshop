'use strict';   

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
// Add to Basket
function addToBasket () {
    const addBasket = document.querySelectorAll('.add-basket');

    for(let i = 0; i < addBasket.length; i++){
        addBasket[i].addEventListener('click', () => {
            addToDb(i);
            addedItemsCounter(i);
            location.reload();
        });
    }
};
// Basket items counter
function addedItemsCounter (i) {
    for(let k = 0; k < db.length; k++){
        if(db[k].id === data.men[i].id){
            db[k].counter += 1;
            localStorage.setItem('items',JSON.stringify(db));
            break;
        }
    }
}

function addToDb (i) {
    if(db.length === 0){
        db.push(data.men[i]);
        db[0].counter = 0;
        localStorage.setItem('items', JSON.stringify(db));
    }
    else{
        let select = false;
        for(let k = 0; k < db.length; k++){
            if(db[k].id === data.men[i].id){
                select = true;
                break;
            }
        }
        if(select === false){
            db.push(data.men[i]);
            db[db.length-1].counter = 0;
            localStorage.setItem('items', JSON.stringify(db));
        }
        
    }  
}