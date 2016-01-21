(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('homeCtrl', ['commonService', '$state', '$rootScope',homeFn]);

    function homeFn(commonService, $state, $rootScope) {
        console.log('HomeCtrl get called');
    }
}());