'use strict'

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (item, img ='https://placehold.it/200x150' ) =>
        `<div class="products__card">
        <img src="${img}" alt= "Some img">
        <div class="products__text">
            <h3>${item.title}</h3>
            <p>${item.price} \u20bd</p>
            <button class="buy-btn">Купить</button>
        </div>
    </div>`;


const renderProducts = (list) => {
document.querySelector('.products').insertAdjacentHTML('beforeend',list.map(item =>renderProduct(item)).join(''));
};

renderProducts(products);
