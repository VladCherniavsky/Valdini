(function(){
    angular
        .module('myApp')
        .config(['$stateProvider','$urlRouterProvider', config]);

    function config($stateProvider,$urlRouterProvider) {



        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'homeCtrl',
                controllerAs: 'home',
                views: {
                    nav: {
                        templateUrl: 'views/navbar.html'
                    },
                    content: {
                        templateUrl: 'views/home.html'
                    }
                }
            });
    }
}());