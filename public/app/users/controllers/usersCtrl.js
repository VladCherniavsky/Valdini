
(function () {
    'use strict';
angular
    .module('myApp')
    .controller('usersCtrl', ['usersService', usersCtrlFn]);

    function usersCtrlFn(usersService) {
        var self = this;
        self.name = 'Vlad';
        usersService
            .getAllUsers()
            .then(function (allUsers) {
                self.allUsers = allUsers;
            });
    }
}());