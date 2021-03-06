(function(){
    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    nav: {
                        templateUrl: 'views/navbar.html',
                        controller: 'CommonController',
                        controllerAs:'common'
                    },
                    content: {
                        templateUrl: 'views/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            });
    }
}());