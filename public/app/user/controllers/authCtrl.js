(function () {
    'use strict';
angular
    .module('myApp')
    .controller('authCtrl', [authFn]);

    function authFn() {
        console.log('hii from auth');
        this.tabs = {
            loginTab: true,
            registrationTab: false
        };
      
       
    }
}) ();