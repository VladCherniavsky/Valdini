(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('AccessoriesController', AccessoriesController);

    AccessoriesController.$inject = ['data'];

    function AccessoriesController (data) {
        var self = this;
        self.data = data;
    }
}()) ;