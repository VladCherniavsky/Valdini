(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['CommonService', '$state', '$rootScope'];

    function HomeController(CommonService, $state, $rootScope) {
        console.log('HomeCtrl get called');
    }
}());