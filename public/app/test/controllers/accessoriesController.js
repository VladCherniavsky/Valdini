(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('AccessoriesController', AccessoriesController);

    AccessoriesController.$inject = ['$state', '$scope', 'data'];

    function AccessoriesController ($state, $scope, data) {
        var self = this;
        self.data = data;
    }
}()) ;