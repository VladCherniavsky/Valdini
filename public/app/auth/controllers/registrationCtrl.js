(function () {
    'use strict';
angular
    .module('myApp')
    .controller('registrationCtrl', ['registrationService', '$rootScope', '$state', 'commonService', 'usersService', registrationFn]);

    function registrationFn(registrationService, $rootScope, $state, commonService, usersService) {
        console.log('registrationCtrl is called');

        var self = this;
        self.numberOfFandoms = 10;
        this.registerUser = function (user) {
            console.log(user);
            var credentials = {
                email: user.email,
                password: user.password
            };
            registrationService
                .registerUser(credentials)
                    .then(function (res) {
                         console.log(res);
                    self.clearCredential(user);
                    $rootScope.userName = res.user.username;
                    $state.go('join.details');
                });
        };
        this.clearCredential = function (user) {
            commonService.clearObj(user);
        };

        this.addInfoToUser = function (userInfo) {
            if ($rootScope.userName !== null || $rootScope.userName !== '' || $rootScope.userName !== undefined) {
                userInfo.userName = $rootScope.userName;
                console.log($rootScope.userName);
                usersService
                    .addInfo(userInfo)
                    .then(function (data) {
                        console.log(data);
                        $state.go('join.fandoms');
                    });
            }
        };
        this.goToFandoms = function () {

        };
    }
}());