(function () {
    'use strict';
angular
    .module('myApp')
    .controller('registrationCtrl', ['registrationService', '$rootScope', '$state', 'commonService',  registrationFn]);

    function registrationFn(registrationService, $rootScope, $state, commonService) {
        console.log('registrationCtrl is called');
        var self = this;
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
                    $rootScope.userName = res.user;
                    $state.go('join.details');
                });
        };
        this.clearCredential = function (user) {
            commonService.clearObj(user);
        };
    }
}());