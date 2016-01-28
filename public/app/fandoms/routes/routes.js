(function() {
    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) { $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('join.fandoms',
            {
                url: '/fandoms',
                needName: true,
                views: {
                    main: {
                        templateUrl: 'views/fandoms.html',
                        controller: 'FandomsController',
                        controllerAs: 'Fandoms'
                    }
                }
            });

    }
}());