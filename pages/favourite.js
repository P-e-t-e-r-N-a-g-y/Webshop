'use strict';   

function loadData() {
    for(let i = 0; i < dbFav.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div');
        cards.className = 'flex-box';

        const html = `
        <div class="flex-element-top">
            <img class="flex-element-img" src="${dbFav[i].img}" alt="image">
        </div>
        <div class="flex-element-bottom">
            <p class="flex-element price">$${dbFav[i].price}</p>
            <button class=" flex-element add-basket"><img class="add-basket-img" src="../images/basket.png"></button>
            <button class=" flex-element add-favourite">❤</button>
        </div>
    `;
    container.appendChild(cards);
    cards.innerHTML = html;
    }
    addToBasket();
    checkFavBtns();
};

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
        if(db[k].id === dbFav[i].id){
            db[k].counter += 1;
            localStorage.setItem('items',JSON.stringify(db));
            break;
        }
    }
}
// Add to db local storage
function addToDb (i) {
    if(db.length === 0){
        db.push(dbFav[i]);
        db[0].counter = 0;
        localStorage.setItem('items', JSON.stringify(db));
    }
    else{
        let select = false;
        for(let k = 0; k < db.length; k++){
            if(db[k].id === dbFav[i].id){
                select = true;
                break;
            }
        }
        if(select === false){
            db.push(dbFav[i]);
            db[db.length-1].counter = 0;
            localStorage.setItem('items', JSON.stringify(db));
        }
        
    }  
}

function checkFavBtns(){
    const favBtn = document.querySelectorAll('.add-favourite');

    for(let i = 0; i < favBtn.length; i++){
        favBtn[i].addEventListener('click', () => {
            removeFromDbFav(i);
            location.reload();
        });
    }
}

function removeFromDbFav(i) {
    dbFav.splice(i,1);
    localStorage.setItem('favourite', JSON.stringify(dbFav));
}

if(dbFav.length === 0){
    localStorage.removeItem('favourite');
    const container = document.querySelector('.main');
    const emptyFav = '<h1 class="favourite-empty">No added any favourites! 😢</h1>'

    container.innerHTML = emptyFav;
}
else{
    window.onload = () => {
        loadData();
    }
}