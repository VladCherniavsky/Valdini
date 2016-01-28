(function(){
    angular
        .module('myApp', ['ui.router'])
        .controller('MainController', MainController);

    MainController.$inject = ['$rootScope', '$window', '$state'];

    function MainController($rootScope, $window, $state) {
        $rootScope.logout = function () {
            console.log('log out called');
            $window.localStorage.clear();
            $rootScope.loggedIn = false;
            $state.go('join.login');

        };
    }
}());
