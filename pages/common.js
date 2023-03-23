const data = {
    'men': [
        {
          "id": 101,
          "img": "../images/men/men1.jpg",
          "price": "50"
        },
        {
          "id": 102,
          "img": "../images/men/men2.jpg",
          "price": "100"
        },
        {
          "id": 103,
          "img": "../images/men/men3.jpg",
          "price": "150"
        },
        {
          "id": 104,
          "img": "../images/men/men4.jpg",
          "price": "50"
        },
        {
          "id": 105,
          "img": "../images/men/men5.jpg",
          "price": "75"
        },
        {
          "id": 106,
          "img": "../images/men/men6.jpg",
          "price": "100"
        },
        {
          "id": 107,
          "img": "../images/men/men7.jpg",
          "price": "50"
        },
        {
          "id": 108,
          "img": "../images/men/men8.jpg",
          "price": "250"
        },
        {
          "id": 109,
          "img": "../images/men/men9.jpg",
          "price": "500"
        }
      ],
      'women': [
        {
          "id": 201,
          "img": "../images/women/women1.jpg",
          "price": "50"
        },
        {
          "id": 202,
          "img": "../images/women/women2.jpg",
          "price": "100"
        },
        {
          "id": 203,
          "img": "../images/women/women3.jpg",
          "price": "150"
        },
        {
          "id": 204,
          "img": "../images/women/women4.jpg",
          "price": "50"
        },
        {
          "id": 205,
          "img": "../images/women/women5.jpg",
          "price": "75"
        },
        {
          "id": 206,
          "img": "../images/women/women6.jpg",
          "price": "100"
        },
        {
          "id": 207,
          "img": "../images/women/women7.jpg",
          "price": "50"
        },
        {
          "id": 208,
          "img": "../images/women/women8.jpg",
          "price": "250"
        },
        {
          "id": 209,
          "img": "../images/women/women9.jpg",
          "price": "500"
        }
      ]
};

const db = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
const dbFav = localStorage.getItem('favourite')?JSON.parse(localStorage.getItem('favourite')):[];
const basketCounter = document.querySelector('.counter');
const allItem = counterSum();
basketCounter.textContent = `${allItem}`;

function counterSum(){
  let sum = 0;
  for(let i = 0; i < db.length; i++){
      sum += db[i].counter;
  }

  return sum;
}

// Login
let loginBox = document.getElementById('login-box');
let main = document.getElementById('main');

document.querySelector('.login-btn').addEventListener('click', () => {
    loginBox.style.display = 'block';
    main.style.opacity = 0.4;
})

document.querySelector('.close-btn').addEventListener('click', () => {
    loginBox.style.display = 'none';
    main.style.opacity = 1;
})