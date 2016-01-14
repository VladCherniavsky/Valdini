
(function () {
    'use strict';
angular
    .module('myApp')
    .controller('loginCtrl', ['loginService', '$window', '$state', 'commonService', loginCtrlFn]);

    function loginCtrlFn(loginService, $window, $state, commonService) {
        console.log('hii');
        this.tabs = {
            loginTab: true,
            registrationTab: false
        };
        this.loginUser = function (user) {
            var credentials = {
                email: user.email,
                password: user.password
            };
            loginService
                .loginUser(credentials)
                    .then(function (res) {
                        $window.localStorage.token = res.token;
                    console.log(res);
                    //$state.go('users');
                });
        };
        this.checkToken = function () {
            commonService.checkAuth().then(function (res) {
                console.log(res);
            });
        };
    }
}) ();