
(function () {
    'use strict';
angular
    .module('myApp')
    .controller('registrationCtrl', ['registrationService', '$window', '$state', 'commonService', registrationFn]);

    function registrationFn(registrationService, $window, $state, commonService) {
        console.log('registrationCtrl is called');
        var self=this;
           console.log($state);
       
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

                    //$state.go('users');
                });
        };
        this.clearCredential=function(user){
            commonService.clearObj(user);
        };
      
    }
}) ();