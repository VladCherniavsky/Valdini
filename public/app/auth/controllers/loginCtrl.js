(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['loginService', '$window', '$state','$rootScope', 'CommonService'];

    function LoginController(loginService, $window, $state,$rootScope, CommonService) {
        console.log('login called');
        var self = this;
        self.loginUser = loginUser;

        function loginUser (user) {
            var credentials = {
                email: user.email,
                password: user.password
            };
            loginService
                .loginUser(credentials)
                .then(function (res) {
                    if (res.success) {
                        $window.localStorage.token = res.token;
                        CommonService.clearObj(user);
                        $rootScope.loggedIn = true;
                        $state.go('home');
                    } else {
                        $state.go('join.login');
                    }
                });
        }

    }
}()) ;