(function(){
    angular
        .module('myApp')
        .config(['$stateProvider','$urlRouterProvider', config]);

    function config($stateProvider,$urlRouterProvider) {



        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    nav: {
                        templateUrl: 'views/navbar.html'
                    },
                    content: {
                        templateUrl: 'views/home.html',
                        controller: 'homeCtrl',
                        controllerAs: 'home'
                    }
                }
            });
    }
}());