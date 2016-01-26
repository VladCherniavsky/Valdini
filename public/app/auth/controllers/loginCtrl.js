(function () {
    'use strict';
angular
    .module('myApp')
    .controller('loginCtrl', ['loginService', '$window', '$state','$rootScope', 'CommonService', loginCtrlFn]);

    function loginCtrlFn(loginService, $window, $state,$rootScope, CommonService) {
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
                        self.clearCredential(user);
                        $rootScope.loggedIn = true;
                        $state.go('home');
                    } else {
                        $state.go('join.login');
                    }
                });
        };
        this.checkToken = function () {
            CommonService
                .checkAuth()
                .then(function (res) {
                    console.log(res);
                }, function (err) {
                    console.log(err);
                });
        };
        this.clearCredential=function(user){
        	CommonService.clearObj(user);
        };
    }
}) ();