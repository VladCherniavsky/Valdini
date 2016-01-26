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
                controller: 'RegistrationCtrl',
                controllerAs: 'registration',
                views: {
                    main: {
                        templateUrl: 'views/registration.html',
                        controller: 'RegistrationCtrl',
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
                        controller: 'RegistrationCtrl',
                        controllerAs: 'registration'
                    }
                }
            });


    }
}());