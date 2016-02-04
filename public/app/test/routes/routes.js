(function() {
    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        var self = this;
        self.getData = getData ;


       // This function return object which contains array of substates for navigation across  application
       // I used it  in 'resolve'  for each state
        function getData (name, label, $state) {
            var currentName = name;
            var currentLabel = label;
            var allStates = $state.get();
            var nestedStates = [];
            angular.forEach(allStates, function (val) {

                var array =val.name.split(currentName + '.');

                if(array[1] ) {
                   var second = array[1];
                    var b = second.split('.');
                    if (b.length == 1) {
                        console.log(b);
                        nestedStates.push({
                            state: currentName + '.' + b,
                            label: val.label
                        });
                    }
                }

            });
            return {
                currentName: currentName,
                currentLabel: currentLabel,
                nestedStates: nestedStates
            };
        }


        $stateProvider
            .state('appliances',
            {
                url: '/appliances',
                templateUrl: 'app/test/views/appliances.html',
                label: 'Бытовая техника',
                controller: 'AppliancesCtrl',
                controllerAs: 'appliances',
                resolve: {
                    data: function($state){
                        return self.getData(this.name, this.label, $state);

                    }}
            })
            .state('appliances.forHome',
            {
                url: '/forHome',
                label: 'Техника для дома',
                views: {
                    content : {
                        templateUrl: 'app/test/views/appliancesForHome.html',
                        controller: 'appliancesForHomeController',
                        controllerAs: 'appliancesForHome'

                    }
                },
                resolve: {
                    data: function($state){
                        return self.getData(this.name, this.label, $state);

                    }
                }

            })
            .state('appliances.forHome.accessories',
            {
                url: '/accessories',
                label: 'Аксессуары',
                views: {
                    content : {
                        templateUrl: 'app/test/views/accessories.html',
                        controller: 'AccessoriesController',
                        controllerAs: 'accessories'
                    }
                },
                resolve: {
                    data: function($state){
                        return self.getData(this.name, this.label, $state);

                    }
                }
            })
            .state('appliances.forHome.accessories.waterFilter',
            {
                url: '/forWaterFilter',
                label: 'Для водяных фильтров',
                views: {
                    products : {
                        templateUrl: 'app/test/views/products.html',
                        controller: 'ProductsController',
                        controllerAs: 'products'
                    }
                }

            })
            .state('appliances.forHome.accessories.vacuumCleaner',
            {
                url: '/vacuumCleaner',
                label: 'Для пылесосов'

            })
            .state('appliances.forHome.accessories.washer',
            {
                url: '/washer',
                label: 'Для Для стиральных машин'

            })
            .state('appliances.forHome.systemSmartHouse',
            {
                url: '/systemSmartHouse',
                label: 'Системы умный дом'
            })
            .state('appliances.forHome.irons',
            {
                url: '/irons',
                label: 'Утюги',
                views: {
                    products : {
                        templateUrl: 'app/test/views/irons.html',
                        controller: 'IronsController',
                        controllerAs: 'irons'
                    }
                }
            })
            .state('appliances.forKitchen',
            {
                url: '/forKitchen',
                label: 'Техника для кухни',
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
            .state('appliances.climate',
            {
                url: '/climate',
                label: 'Климатическое оборудование',
                views: {
                    main: {
                        templateUrl: 'views/info.html',
                        controller: 'RegistrationController',
                        controllerAs: 'registration'
                    }
                }
            }).state('appliances.largeAppliances',
            {
                url: '/largeAppliances',
                label: 'Большая техника для кухни',
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