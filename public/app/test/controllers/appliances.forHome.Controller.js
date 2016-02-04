(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('appliancesForHomeController', appliancesForHomeController);

    appliancesForHomeController.$inject = ['$state', '$scope', 'data'];

    function appliancesForHomeController ($state, $scope, data) {
        var self = this;
        console.log("dfdsf");
        self.data = data;
    }
}()) ;