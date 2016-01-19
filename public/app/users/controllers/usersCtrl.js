
(function () {
    'use strict';
angular
    .module('myApp')
    .controller('usersCtrl', ['usersService', usersCtrlFn]);

    function usersCtrlFn(usersService) {
        var self = this;


        usersService.getAllUsers().then(function(allUsers){
            self.allUsers=allUsers;

        });
    }
}());