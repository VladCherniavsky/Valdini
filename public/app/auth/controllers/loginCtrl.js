
(function () {
    'use strict';
angular
    .module('myApp')
    .controller('loginCtrl', ['loginService', '$window', '$state','$rootScope', 'commonService', loginCtrlFn]);

    function loginCtrlFn(loginService, $window, $state,$rootScope, commonService) {
        console.log('loginCtrl is called');
        var self = this;
      
        this.loginUser = function (user) {
            var credentials = {
                email: user.email,
                password: user.password
            };
            loginService
                .loginUser(credentials)
                    .then(function (res) {
                    if (res.success) {
                        $window.localStorage.token = res.token;
                        console.log(res);
                        self.clearCredential(user);
                        $rootScope.loggedIn = true;
                        $state.go('home');
                    } else {
                        $state.go('join.login');
                    }
                });
        };
        this.checkToken = function () {
            commonService
                .checkAuth()
                .then(function (res) {
                    console.log(res);
                }, function (err) {
                    console.log(err);
                });
        };
        this.clearCredential=function(user){
        	commonService.clearObj(user);
        };
    }
}) ();