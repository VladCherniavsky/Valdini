(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('appliancesForHomeController', appliancesForHomeController);

    appliancesForHomeController.$inject = ['data'];

    function appliancesForHomeController (data) {
        var self = this;
        self.data = data;
    }
}()) ;