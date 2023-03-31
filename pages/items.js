'use strict';   
function loadData(category, title) {
    console.log(category);
    for(let i = 0; i < data.items.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div');
        cards.className = 'flex-box';
        const html = `
        <div class="flex-element-top">
            <img class="flex-element-img" src="${data.items[i].img}" alt="image">
        </div>
        <div class="flex-element-bottom">
            <p class="flex-element price">$${data.items[i].price}</p>
            <button class=" flex-element add-basket"><img class="add-basket-img" src="../images/basket.png"></button>
        </div>
        `;
        let filter = searchBar(i,category,title);

        if(filter === true){
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
            const allItem = counterSum();
            basketCounter.textContent = `${allItem}`;
        });
    }
};
// Basket items counter
function addedItemsCounter (i) {
    for(let k = 0; k < db.length; k++){
        if(db[k].id === data.items[i].id){
            db[k].counter += 1;
            localStorage.setItem('items',JSON.stringify(db));
            break;
        }
    }
}
// Add to db local storage
function addToDb (i) {
    if(db.length === 0){
        db.push(data.items[i]);
        db[0].counter = 0;
        localStorage.setItem('items', JSON.stringify(db));
    }
    else{
        let select = false;
        for(let k = 0; k < db.length; k++){
            if(db[k].id === data.items[i].id){
                select = true;
                break;
            }
        }
        if(select === false){
            db.push(data.items[i]);
            db[db.length-1].counter = 0;
            localStorage.setItem('items', JSON.stringify(db));
        }
        
    }  
}
// Check favourite buttons
function checkFavBtn() {
    const addFav = document.querySelectorAll('.add-favourite');
    
    for(let i = 0; i < addFav.length; i++){
        const checkDbFavourite = checkDbFav(i);
        let toggleBtn = false;
        addFav[i].addEventListener('click', () => {
            toggleBtn = !toggleBtn;
            if(toggleBtn && checkDbFavourite !== true){
                addFav[i].textContent = '❤';
                addToDbFav(i);
            }
            else {
                addFav[i].textContent = '🤍';
                removeFromDbFav(i);
            }
        });
    }
}
// Add to dbFav local storage
function addToDbFav(i) {
    let select = false;

    if(dbFav.length === 0){
        dbFav.push(data.items[i]);
        localStorage.setItem('favourite', JSON.stringify(dbFav));
    }
    else{
        for(let k = 0; k < dbFav.length; k++){
            if(dbFav[k].id === data.items[i].id){
                select = true;
                break;
            }
        }
        if(select === false){
            dbFav.push(data.items[i]);
            localStorage.setItem('favourite', JSON.stringify(dbFav));
        }
    }
}
// Remove from dbFav local storage
function removeFromDbFav(i) {
    for(let k = 0; k < dbFav.length; k++){
        if(dbFav[k].id === data.items[i].id){
            dbFav.splice(k,1);
            localStorage.setItem('favourite', JSON.stringify(dbFav));
        }
    }
}
// Check the dbFav storage already added to favourites  
function checkDbFav(i) {
    let select = false;
    for(let k = 0; k < dbFav.length; k++){
        if(dbFav[k].id === data.items[i].id){
            select = true;
            break;
        }
    }
    return select;
}
// Search bar
function searchBar(i,category,title) {
    let select = false;

    if(category === data.items[i].category){
        select = true;
    }
        // data.items[i].title

    return select;
}

// Delete the empty storage
if(dbFav.length === 0){
    localStorage.removeItem('favourite');
}

console.log(category);
loadData(category);



