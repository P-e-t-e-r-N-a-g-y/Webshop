let counter = 0;

function loadData() {
    for(let i = 0; i < db.length; i++){
        const container = document.querySelector('.flex-container');
        const cards = document.createElement('div');
        cards.className = 'flex-box';

        const html = `
            <img class="flex-element flex-element-top" src="${db[i].img}" alt="image">
            <p class="flex-element flex-element-bottom">$${db[i].price}</p>
    `;
    container.appendChild(cards);
    cards.innerHTML = html;
    }
};

loadData();