
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['usersService', '$log', '$state', 'CommonService'];

    function UsersController(usersService, $log, $state, CommonService) {
        var self = this;
        self.name = 'Vlad';
        usersService
            .getAllUsers()
            .then(function (data) {
                CommonService.redirectToLogin(data);
                $log.warn(data);
            });
    }
}());