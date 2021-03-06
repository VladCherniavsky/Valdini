(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['loginService', '$window', '$state','$rootScope', 'CommonService'];

    function LoginController(loginService, $window, $state,$rootScope, CommonService) {
        $rootScope.tabs.showLoginTab();
        console.log('login called');
        var self = this;
        self.loginUser = loginUser;
        var a = $state.get();
        angular.forEach(a, function (val) {
           var array =  val.name.split('join.');
            if(array[1]){
                console.log(array);
            }
        });

        function loginUser (user) {
            console.log(user);
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
                }).catch(function (err) {
                    console.log(err);
                    $state.go('join.login');
                });
        }

    }
}()) ;