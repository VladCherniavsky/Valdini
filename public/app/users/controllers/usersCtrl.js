
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['usersService'];

    function UsersController(usersService) {
        var self = this;
        self.name = 'Vlad';
        usersService
            .getAllUsers()
            .then(function (allUsers) {
                self.allUsers = allUsers;
            });
    }
}());