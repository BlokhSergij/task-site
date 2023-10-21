'use strict';

let product = {
    title: 'Мобильный телефон Apple iPhone 11 128GB Black Slim Box (MHDH3) Официальная гарантия',
    articule: '5457578144',
    label: 'Супер ціна',
    state: 'новий',
    price: '2999',
    discount: '3199',
    img: ['phone1.svg', 'phone2.svg', 'phone3.svg', 'phone4.svg', 'phone5.svg', 'phone3.svg', 'phone4.svg', 'phone5.svg'],
    description: [
        {title: 'Диагональ экрана', value: '6.1'}, 
        {title: 'Разрешение дисплея', value: '1792 x 828'}, 
        {title: 'Тип матрицы', value: 'IPS'}, 
        {title: 'Количество точек касания', value: '10'},
        {title: 'Материал экрана', value: 'Стекло'},
        {title: 'Количество СИМ-карт', value: '1'},
        {title: 'Размеры СИМ-карты', value: 'Nano-SIM'},
        {title: 'Оперативная память', value: '4 ГБ'},
        {title: 'Встроенная память', value: '128 ГБ'}
    ]
};

document.addEventListener("DOMContentLoaded", function() {

  const phoneList = document.getElementById("phone-select");
  const currentPhone = phoneList.querySelector(".select-list__current-element");
  const optionButton = phoneList.querySelector(".select-list__button");
  const options = phoneList.querySelector(".select-list__options");
  const optionList = phoneList.querySelectorAll(".select-list__option");
  const articule = document.getElementById("articule");
  const state = document.getElementById("state");
  const label = document.getElementById("label");
  const price = document.getElementById("price");
  const discount = document.getElementById("discount");
  
  currentPhone.innerHTML = optionList[0].innerHTML;
  optionList[0].style.display = "none";
  articule.textContent = product.articule;
  state.textContent = product.state;
  price.textContent = product.price;

  if(product.label) {
    label.textContent = product.label;
    label.style.display = "flex";
  };

  if(product.discount) {
    discount.textContent = product.discount + ' грн.';
    discount.style.display = "flex";
  };

  optionButton.addEventListener("click", function() {

    options.style.display = options.style.display === "block" ? "none" : "block";
    optionButton.style.transform = options.style.display === "block" ? 'rotate(180deg)' : '';
  });

  optionList.forEach(function(option) {

    option.addEventListener("click", function() {

      currentPhone.innerHTML = option.innerHTML;

      optionList.forEach(function(opt) {

        opt.style.display = "flex";
      });
      
      option.style.display = "none";
      options.style.display = "none";
      optionButton.style.transform = '';
    });
  });

  const description = document.getElementById("description");

  product.description.forEach(item => {

    const row = document.createElement("div");

    row.classList.add("description__item");
    row.innerHTML = `<div class="description__title"><p>${item.title}</p><hr></div><p class="description__value">${item.value}</p>`
    description.appendChild(row);
  });
});

//counter--------------------------
const decrementButton = document.getElementById('decrement-button');
const incrementButton = document.getElementById('increment-button');
const counterValue = document.getElementById('counter-value');

let count = 1;

function updateCounter() {

    counterValue.value = count;
}

incrementButton.addEventListener('click', function () {

    count++;
    updateCounter();
});

decrementButton.addEventListener('click', function () {

    if (count > 1) {
        count--;
        updateCounter();
    }
});

updateCounter();

//burger------------------------
const burgerButton = document.getElementById("burger-button");
const burger = document.getElementById("burger");

const searchBurgerButton = document.getElementById("search-burger-button");
const searchBurger = document.getElementById("search-burger");

let isBurgerToggled = false;
let isSearchBurgerToggled = false;

burgerButton.addEventListener("click", function () {

    isBurgerToggled = !isBurgerToggled;

    const svg = burgerButton.querySelector("svg");

    if (isBurgerToggled) {
      svg.innerHTML = `
        <path d="M6 6L17 17" stroke="#E96315" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M17 6L6 17" stroke="#E96315" stroke-width="1.5" stroke-linecap="round"/>
      `;
  } 
    else {

      svg.innerHTML = `<path d="M9 18H20M4 12H20M4 6H20" stroke="#2C2C35" stroke-width="1.5" stroke-linecap="round"/>`;
    }

    burger.style.display = isBurgerToggled ? "block" : "none";
});

//search burger------------------------
searchBurgerButton.addEventListener("click", function () {
  
    isSearchBurgerToggled = !isSearchBurgerToggled;

    const svg = searchBurgerButton.querySelector("svg");

    if (isSearchBurgerToggled) {
    
      svg.innerHTML = `
        <path d="M20.0001 20.0001L18.2223 18.2223L17.3334 17.3334L15.5557 15.5557" stroke="#E96315" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="10.6667" cy="10.6667" r="6.66667" stroke="#E96315" stroke-width="1.5"/>
      `;
  } 
    else {

      svg.innerHTML = `
        <path d="M20.0001 20.0001L18.2223 18.2223L17.3334 17.3334L15.5557 15.5557" stroke="#2C2C35" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="10.6667" cy="10.6667" r="6.66667" stroke="#2C2C35" stroke-width="1.5"/>`;
    }

    searchBurger.style.display = isSearchBurgerToggled ? "block" : "none";
});


