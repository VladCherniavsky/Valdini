(function() {
    angular
        .module('myApp')
            .config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) { $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('join',
            {
                url: '/join',
                templateUrl: 'views/securityForm.html',
                controller: 'authCtrl',
                controllerAs: 'auth'
            })
            .state('join.login',
            {
                url: '/login',
                controller: 'loginCtrl',
                controllerAs: 'login',
                views: {
                    main: {
                        templateUrl: 'views/login.html',
                        controller: 'loginCtrl',
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
                controller: 'registrationCtrl',
                controllerAs: 'registration',
                views: {
                    main: {
                        templateUrl: 'views/registration.html',
                        controller: 'registrationCtrl',
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
                controller: 'registrationCtrl',
                controllerAs: 'registration',
                needName: true,
                views: {
                    main: {
                        templateUrl: 'views/info.html'
                    }
                }

            });

    }
})();