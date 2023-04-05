let title = '';
let items = data;

function loadData(category, title) {
    for(let i = 0; i < items.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div');
        cards.className = 'flex-box';
        const html = `
        <div class="flex-element-top">
            <img class="flex-element-img" src="${items[i].img}" alt="image">
        </div>
        <div class="flex-element-bottom">
            <p class="flex-element price">$${items[i].price}</p>
            <button class=" flex-element add-basket"><img class="add-basket-img" src="../images/basket.png"></button>
            <button class=" flex-element add-favourite">🤍</button>
        </div>
        `;
        let filter = searchBar(i,category,title);

        if(filter === true){
            container.appendChild(cards);
            cards.innerHTML = html;
    
            const favBtn = document.querySelectorAll('.add-favourite');
            const checkDbFavourite = checkDbFav(i);
    
            if(checkDbFavourite){
                favBtn[i].textContent = "❤";
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
        if(db[k].id === items[i].id){
            db[k].counter += 1;
            localStorage.setItem('items',JSON.stringify(db));
            break;
        }
    }
}
// Add to db local storage
function addToDb (i) {
    if(db.length === 0){
        db.push(items[i]);
        db[0].counter = 0;
        localStorage.setItem('items', JSON.stringify(db));
    }
    else{
        let select = false;
        for(let k = 0; k < db.length; k++){
            if(db[k].id === items[i].id){
                select = true;
                break;
            }
        }
        if(select === false){
            db.push(items[i]);
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
        dbFav.push(items[i]);
        localStorage.setItem('favourite', JSON.stringify(dbFav));
    }
    else{
        for(let k = 0; k < dbFav.length; k++){
            if(dbFav[k].id === items[i].id){
                select = true;
                break;
            }
        }
        if(select === false){
            dbFav.push(items[i]);
            localStorage.setItem('favourite', JSON.stringify(dbFav));
        }
    }
}
// Remove from dbFav local storage
function removeFromDbFav(i) {
    for(let k = 0; k < dbFav.length; k++){
        if(dbFav[k].id === items[i].id){
            dbFav.splice(k,1);
            localStorage.setItem('favourite', JSON.stringify(dbFav));
        }
    }
}
// Check the dbFav storage already added to favourites  
function checkDbFav(i) {
    let select = false;
    for(let k = 0; k < dbFav.length; k++){
        if(dbFav[k].id === items[i].id){
            select = true;
            break;
        }
    }
    return select;
}
// Search bar
function searchBar(i,category,title) {
    let select = false;

    if(category === items[i].category && title === items[i].title || title === ''){
        select = true;
    }

    return select;
}

// Delete the empty storage
if(dbFav.length === 0){
    localStorage.removeItem('favourite');
}

if(category === "men"){
    items = data.men;
}
else if(category === "women"){
    items = data.women;
}
loadData(category,title);



