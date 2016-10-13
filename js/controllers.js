(function () {

  'use strict';

  var app = angular.module('cameraApp');

  app.controller('CartController', CartController);
  app.controller('ManageProducts', ManageProducts);

  function ManageProducts() {
    this.cameras = [{
      id: 1,
      name: 'Nikon D3100 DSLR',
      image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
      rating: 4,
      price: 369.99,
      onSale: true
    },{
      id: 2,
      name: 'Canon EOS 70D',
      image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
      rating: 2,
      price: 1099.0,
      onSale: false
    },{
      id: 3,
      name: 'Nikon D810A',
      image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
      rating: 3,
      price: 3796.95,
      onSale: true
    }];

    this.selectValue = 'name';
    this.searchQuery = '';
  }

  function CartController() {
    this.productToAdd = '';
    this.basket = [];
    this.subtotal = 0.00;
    this.tax = 0.00;
    this.total = 0.00;

    this.addProduct = (product) => {

      const indexOfProduct = this.basket.map(value => value.name).indexOf(product.name);

      if( indexOfProduct === -1 ) {
        this.basketObj = Object.assign({}, product);
        this.basketObj.quantity = 1;
        this.basket.push(this.basketObj);
      }
      else {
        this.basket[indexOfProduct].quantity++;
      }

      this.subtotal += this.basketObj.price;
      this.tax = parseFloat(this.subtotal) * 0.0875;
      this.total = parseFloat(this.subtotal) + parseFloat(this.tax);
    };

    this.removeProduct = (product) => {
      const productToRemove = this.basket.splice(this.basket.map(value => value.name).indexOf(product.name), 1)[0];
      this.subtotal -= parseFloat(productToRemove.price) * parseInt(productToRemove.quantity);
      this.tax = parseFloat(this.subtotal) * 0.0875;
      this.total = parseFloat(this.subtotal) + parseFloat(this.tax);
    };
  }

})();
