
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['usersService', '$log', '$state', 'CommonService'];

    function UsersController(usersService, $log, CommonService) {
        var self = this;
        self.name = 'Vlad';
        usersService
            .getAllUsers()
            .then(function (data) {
                if (data.success){
                    self.allUsers = data.users;
                } else {
                    CommonService.logout();
                }

                $log.warn(data);
            });
    }
}());