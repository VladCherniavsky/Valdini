
(function () {
    'use strict';
angular
    .module('myApp')
    .controller('loginCtrl', ['loginService', '$window', '$state', 'commonService', loginCtrlFn]);

    function loginCtrlFn(loginService, $window, $state, commonService) {
        console.log('hii');
        var self = this;
      
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
                    self.clearCredential(user);
                    //$state.go('users');
                });
        };
        this.checkToken = function () {
            commonService.checkAuth().then(function (res) {
                console.log(res);
               
            });
        };
        this.clearCredential=function(user){
        	commonService.clearObj(user);
        };
    }
}) ();