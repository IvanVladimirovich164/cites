'use strict'

let arrayProducts = [{name: "Ноутбук ASUS Zenbook", article: 1235212, price: 250000, photo: './img/photo.jpg'}, 
            {name: "Ноутбук Samsung", article: 99999, price: 520000, photo: './img/photo.jpg'}, 
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg'},
            {name: "Ноутбук HP", article: 12212, price: 252200, photo: './img/photo.jpg'},];

let getProductsList = document.querySelector('.products__list');

let productItem = ``; 

function generateProducts(arr) {
    arr.forEach(el => {
        productItem += `<div class="post">
                <div class="container">
                <div class="post__body">
                    <img class="post__img" src="${el.photo}" alt="${el.name}"/>
                    <div class="post__desc">
                        <div class="post__name">${el.name}</div>
                        <div class="post__article">Артикль: ${el.article}</div>
                        <div class="post__price">Цена: ${el.price}</div>
                        <button class="post__btn">Купить</button>
                    </div>
                </div>
            </div> 
        </div>
        <hr>
        `
    });
}

function addProducts(items, parent){
    parent.insertAdjacentHTML("afterend", items)
}

generateProducts(arrayProducts);
addProducts(productItem, getProductsList);