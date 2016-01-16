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
             $state.go('users');
        }
        function errorHandle(data){
            $state.go('join.login');
        }


      
       
    }
}) ();