(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('CommonController', CommonController);

    CommonController.$inject = ['CommonService', '$rootScope'];

    function CommonController (CommonService, $rootScope) {
        var self = this;
        self.logout = logout;

        function logout () {
            console.log('aaaa');
            CommonService.logout();
        }

    }
}()) ;