(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['registrationService','$rootScope', '$state', 'CommonService','usersService','$log'];

    function RegistrationController (registrationService, $rootScope, $state, CommonService, usersService, $log) {
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
                        console.log(data);
                        self.clearCredential(user);
                        $rootScope.userName = data.user.username;
                        $state.go('join.details');
                    } else {
                        self.clearCredential(user);
                        console.log(data);
                    }

                });
        };
        self.clearCredential = function (user) {
            CommonService.clearObj(user);
        };

        self.addInfoToUser = function (userInfo) {
            if (!$rootScope.userName) {
                $state.go('join.login');
            } else {
                userInfo.userName = $rootScope.userName;
                console.log($rootScope.userName);
                usersService
                    .addInfo(userInfo)
                    .then(function (data) {
                        if(data.success){
                            $log.info(data)
                            $state.go('join.fandoms');
                        } else {
                            $log.info(data)
                            $state.go('join.login');
                        }


                    });
            }

        };
    }
}());