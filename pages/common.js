const data = {
    'men': [
        {
          "id": 1,
          "img": "../images/men/men1.jpg",
          "price": "50"
        },
        {
          "id": 2,
          "img": "../images/men/men2.jpg",
          "price": "100"
        },
        {
          "id": 3,
          "img": "../images/men/men3.jpg",
          "price": "150"
        },
        {
          "id": 4,
          "img": "../images/men/men4.jpg",
          "price": "50"
        },
        {
          "id": 5,
          "img": "../images/men/men5.jpg",
          "price": "75"
        },
        {
          "id": 6,
          "img": "../images/men/men6.jpg",
          "price": "100"
        },
        {
          "id": 7,
          "img": "../images/men/men7.jpg",
          "price": "50"
        },
        {
          "id": 8,
          "img": "../images/men/men8.jpg",
          "price": "250"
        },
        {
          "id": 9,
          "img": "../images/men/men9.jpg",
          "price": "500"
        }
      ],
      'women': [
        {
          "id": 1,
          "img": "../images/women/women1.jpg",
          "price": "50"
        },
        {
          "id": 2,
          "img": "../images/women/women2.jpg",
          "price": "100"
        },
        {
          "id": 3,
          "img": "../images/women/women3.jpg",
          "price": "150"
        },
        {
          "id": 4,
          "img": "../images/women/women4.jpg",
          "price": "50"
        },
        {
          "id": 5,
          "img": "../images/women/women5.jpg",
          "price": "75"
        },
        {
          "id": 6,
          "img": "../images/women/women6.jpg",
          "price": "100"
        },
        {
          "id": 7,
          "img": "../images/women/women7.jpg",
          "price": "50"
        },
        {
          "id": 8,
          "img": "../images/women/women8.jpg",
          "price": "250"
        },
        {
          "id": 9,
          "img": "../images/women/women9.jpg",
          "price": "500"
        }
      ]
};

const db = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
const basketCounter = document.querySelector('.counter');
basketCounter.textContent = `${db.length}`;

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