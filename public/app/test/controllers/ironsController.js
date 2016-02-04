(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('IronsController', IronsController);

    IronsController.$inject = [];

    function IronsController ( ) {
        var self = this;

        self.products = [];
        for (var i =0; i<20; i++) {
            self.products.push({
                name: 'iron' + ' ' + i
            });
        }
    }
}()) ;