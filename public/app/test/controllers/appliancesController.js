(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('AppliancesCtrl', AppliancesCtrl);

    AppliancesCtrl.$inject = ['$state', '$scope', 'data'];

    function AppliancesCtrl ($state, $scope, data) {
        var self = this;
        self.data = data;
    }
}()) ;