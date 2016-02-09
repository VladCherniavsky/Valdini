(function() {
    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) { $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('documents',
            {
                url: '/documents',
                views: {
                    nav: {
                        templateUrl: 'views/navbar.html',
                        controller: 'CommonController',
                        controllerAs:'common'
                    },
                    content: {
                        templateUrl: 'views/document.html',
                        controller:'DocumentController',
                        controllerAs:'document'
                    }
                }
            });

    }
}());