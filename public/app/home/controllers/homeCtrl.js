(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('homeCtrl', ['CommonService', '$state', '$rootScope',homeFn]);

    function homeFn(CommonService, $state, $rootScope) {
        console.log('HomeCtrl get called');
    }
}());