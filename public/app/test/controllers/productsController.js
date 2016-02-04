(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = [];

    function ProductsController () {
        var self = this;

        self.products = [];
        for (var i =0; i<20; i++) {
            self.products.push({
                name: 'item' + ' ' + i
            });
        }
    }
}()) ;