(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('TabsController', TabsController);

    TabsController.$inject = ['CommonService','$state','$rootScope', '$log'];

    function TabsController (CommonService,$state,$rootScope, $log) {
        $log.warn('TabrsCtrl get called');
        CommonService.checkAuth().then(successHandle, errorHandle);

        var self = this;
        self.tabs = {
            loginTab: true,
            registrationTab: false,
            showRegisterTab: showRegisterTab,
            showLoginTab: showLoginTab
        };
        $rootScope.tabs = self.tabs;
        if($state.current.name === 'join.signup'){
            self.tabs.showRegisterTab();
        }
         if($state.current.name === 'join.login'){
             self.tabs.showLoginTab();
        }
        function successHandle(data){
            if(data.success){
                $rootScope.loggedIn = true;
                $state.go('home');
            }

        }
        function errorHandle() {
            $rootScope.loggedIn = false;
            $state.go('join.login');
        }
        function showRegisterTab () {
            this.loginTab=false;
            this.registrationTab=true;
            console.log(this);
        }
        function showLoginTab () {
            this.loginTab=true;
            this.registrationTab=false;
            console.log(this);
        }
       
    }
}());