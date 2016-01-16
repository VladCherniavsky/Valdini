
(function () {
    'use strict';
angular
    .module('myApp')
    .controller('usersCtrl', ['loginService', '$window', '$state', 'commonService', usersCtrlFn]);

    function usersCtrlFn(loginService, $window, $state, commonService) {
        
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
               
            },function(err){
            	console.log(err);
            });
        };
        this.clearCredential=function(user){
        	commonService.clearObj(user);
        };
    }
}) ();