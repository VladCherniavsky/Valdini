(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('AppliancesCtrl', AppliancesCtrl);

    AppliancesCtrl.$inject = ['data'];

    function AppliancesCtrl (data) {
        var self = this;
        self.data = data;
    }
}()) ;