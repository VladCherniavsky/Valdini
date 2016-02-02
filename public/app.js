(function(){
    angular
        .module('myApp', ['ui.router'])
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$rootScope', '$window', '$state'];


    function mainCtrl($rootScope, $window, $state) {
        $rootScope.logout = function () {
            console.log('log out called');
            $window.localStorage.clear();
            $rootScope.loggedIn = false;
            $state.go('join.login');

        };
    }
}());
