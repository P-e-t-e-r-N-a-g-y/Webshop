'use strict';   
let toggleBtn = false;

function loadData() {
    for(let i = 0; i < data.men.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div');
        cards.className = 'flex-box';

        const html = `
        <div class="flex-element-top">
            <img class="flex-element-img" src="${data.men[i].img}" alt="image">
        </div>
        <div class="flex-element-bottom">
            <p class="flex-element price">$${data.men[i].price}</p>
            <button class=" flex-element add-basket">Add to Basket</button>
        </div>
        `;

        container.appendChild(cards);
        cards.innerHTML = html;

        const flexBtns = document.querySelectorAll('.flex-element-bottom');
        const favHtmlBtn = document.createElement('button');
        favHtmlBtn.className = 'flex-element add-favourite';
        const checkDbFavourite = checkDbFav(i);

        flexBtns[i].appendChild(favHtmlBtn);

        if(checkDbFavourite){
            favHtmlBtn.textContent = '❤';
        }
        else{
            favHtmlBtn.textContent = '🤍';
        }

    }
    
    addToBasket();
    checkFavBtn();
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
        if(db[k].id === data.men[i].id){
            db[k].counter += 1;
            localStorage.setItem('items',JSON.stringify(db));
            break;
        }
    }
}
// Add to db local storage
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

function checkFavBtn() {
    const addFav = document.querySelectorAll('.add-favourite');
    for(let i = 0; i < addFav.length; i++){
        addFav[i].addEventListener('click', () => {
            toggleBtn = !toggleBtn;
            const checkDbFavourite = checkDbFav(i);
            if(toggleBtn && checkDbFavourite !== true){
                addToDbFav(i);
            }
            else {
                removeFromDbFav(i)
            }
            location.reload();
        });
    }
}

function addToDbFav(i) {
    let select = false;

    if(dbFav.length === 0){
        dbFav.push(data.men[i]);
        localStorage.setItem('favourite', JSON.stringify(dbFav));
    }
    else{
        for(let k = 0; k < dbFav.length; k++){
            if(dbFav[k].id === data.men[i].id){
                select = true;
                break;
            }
        }
        if(select === false){
            dbFav.push(data.men[i]);
            localStorage.setItem('favourite', JSON.stringify(dbFav));
        }
    }
}

function removeFromDbFav(i) {
    for(let k = 0; k < dbFav.length; k++){
        if(dbFav[k].id === data.men[i].id){
            dbFav.splice(k,1);
            localStorage.setItem('favourite', JSON.stringify(dbFav));
        }
    }
}

function checkDbFav(i) {
    let select = false;
    for(let k = 0; k < dbFav.length; k++){
        if(dbFav[k].id === data.men[i].id){
            select = true;
            break;
        }
    }
    return select;
}

window.onload = () => {
    loadData();
}