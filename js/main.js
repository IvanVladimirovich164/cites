'use strict'

let arrayProducts = [{name: "Ноутбук ASUS Zenbook", article: 1235212, price: 250000, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'}, 
            {name: "Ноутбук Samsung", article: 99999, price: 520000, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'}, 
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg', labels: 'Хит', rating: 4.5, reviews: 18, os: 'Win 10', processor: 'amd', odd: 'нет', sklad: 'есть', deliver: '312'},];

const productsListElement = document.querySelector('.products__list');

const productItem = arrayProducts.map(el => {
    return `<div class="product">
        <div class="container">
            <div class="product__header">
                <div class="product__labels">
                    <span class="product__labels-icon  product__labels-icon--hits">${el.labels}</span>
                </div>
                <h4 class="product__title">
                    <a class="product__title-name" href="#">${el.name}</a>
                </h4>
                <div class="product__data">
                <div class="product__data-wrap">
                    <div class="product__rating">${el.rating}</div>
                    <div class="product__data-reviews">${el.reviews}</div>
                    </div>
                    <div class="product__data-article">
                        Код товара:<span class="product__data-numbers">${el.article}</span>
                    </div>
                </div>
            </div> 
            <div class="product__body">
                <img class="product__img" src="${el.photo}" alt="${el.name}" class="post__img"/>
                <div class="product__descr">
                    <ul class="product__descr-list">
                        <li class="product__descr-text">Процессор:<span class="product__value">${el.processor}</span></li>
                        <li class="product__descr-text">Тип ODD:<span class="product__value">${el.odd}</span></li>
                        <li class="product__descr-text">Операционная система:<span class="product__value">${el.os}</span></li>
                        <li class="product__descr-text">В наличии в <span class="product__value">${el.sklad}</span>магазинах</li>
                        <li class="product__desct-text">Привезем в <span class="product__value">${el.deliver}</span>пункт</li>
                    </ul>
                </div>
            </div>                  
            <div class="product__footer">
                <a class="product__compare" href="#">Сравнить</a>
                <button class="product__save-add">Сохранить</button>
                <div class="product__price"><span class="product__price-value">${el.price}<span>Руб</div>
                <button class="product__basket">Купить</button>
            </div>
        </div> 
    </div>
    <hr>`
})


function addProducts(items, parent){
    parent.insertAdjacentHTML("afterBegin", items);
};

addProducts(productItem, productsListElement);