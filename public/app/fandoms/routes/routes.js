(function() {
    angular
        .module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) { $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('join.fandoms',
            {
                url: '/fandoms',
                needName: true,
                views: {
                    main: {
                        templateUrl: 'views/fandoms.html',
                        controller: 'FandomsCtrl',
                        controllerAs: 'Fandoms'
                    }
                }
            });

    }
}());