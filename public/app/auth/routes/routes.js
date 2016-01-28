(function() {
    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider,$rootScope) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('join',
            {
                url: '/join',
                templateUrl: 'views/securityForm.html',
                controller: 'TabsController',
                controllerAs: 'tabs'

            })
            .state('join.login',
            {
                url: '/login',
                views: {
                    main: {
                        templateUrl: 'views/login.html',
                        controller: 'LoginController',
                        controllerAs: 'login'
                    },
                    navTabs: {
                        templateUrl: 'views/navTabs.html'

                    }

                }
            })
            .state('join.signup',
            {
                url: '/signup',
                views: {
                    main: {
                        templateUrl: 'views/registration.html',
                        controller: 'RegistrationController',
                        controllerAs: 'registration'
                    },
                    navTabs: {
                        templateUrl: 'views/navTabs.html'

                    }
                }
            })
            .state('join.details',
            {
                url: '/details',
                needName: true,
                views: {
                    main: {
                        templateUrl: 'views/info.html',
                        controller: 'RegistrationController',
                        controllerAs: 'registration'
                    }
                }
            });
    }
}());