(function () {
    'use strict';
angular
    .module('myApp')
    .controller('authCtrl', ['commonService','$state','$rootScope',authFn]);

    function authFn(commonService,$state,$rootScope) {
        commonService.checkAuth().then(successHandle,errorHandle);
        console.log('hii from auth');
        this.tabs = {
            loginTab: true,
            registrationTab: false,
            showRegisterTab:function(){
                this.loginTab=false;
                this.registrationTab=true;
            },
            showLoginTab:function(){
                this.loginTab=true;
                this.registrationTab=false;
            }
        };
        $rootScope.tabs=this.tabs;
        if($state.current.name=='join.signup'){
            this.tabs.showRegisterTab();
        }
         if($state.current.name=='join.login'){
            this.tabs.showLoginTab();
        }
        function successHandle(data){
            if(data.success){
                $rootScope.loggedIn = true;
                $state.go('home');
            }

        }
        function errorHandle(data) {
            $rootScope.loggedIn = false;
            $state.go('join.login');
        }


      
       
    }
}) ();