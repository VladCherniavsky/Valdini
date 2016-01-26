(function () {
    'use strict';
angular
    .module('myApp')
    .controller('RegistrationCtrl', [
        'registrationService',
        '$rootScope', '$state',
        'CommonService',
        'usersService',
        RegistrationCtrl]);

    function RegistrationCtrl (registrationService, $rootScope, $state, CommonService, usersService) {
        console.log('registrationCtrl is called');

        var self = this;

        self.registerUser = function (user) {
            var credentials = {
                email: user.email,
                password: user.password
            };
            registrationService
                .registerUser(credentials)
                    .then(function (data) {
                    if (data.success) {
                        self.clearCredential(user);
                        $rootScope.userName = data.user.username;
                        $state.go('join.details');
                    }

                });
        };
        self.clearCredential = function (user) {
            CommonService.clearObj(user);
        };

        self.addInfoToUser = function (userInfo) {
            if ($rootScope.userName !== null || $rootScope.userName !== '' || $rootScope.userName !== undefined) {
                userInfo.userName = $rootScope.userName;
                console.log($rootScope.userName);
                usersService
                    .addInfo(userInfo)
                    .then(function (data) {
                        $state.go('join.fandoms');
                        console.log(self.items);

                    });

            }
        };







    }
}());