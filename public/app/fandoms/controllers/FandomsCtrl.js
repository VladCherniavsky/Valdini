(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('FandomsController', FandomsController);

    FandomsController.$inject = ['$log', '$state','$rootScope', 'FandomsService','$scope'];

    function FandomsController($log, $state, $rootScope, FandomsService, $scope) {
        var self = this;

        self.subscribedFandoms = [];
        self.items = [];
        self.numberOfFandoms = 10;
        self.loading = false;
        self.canLoadMore = true;
        self.showNotification = false;
        self.pagination = {
            page: 1,
            perPage: 4,
            skip:0
        };
        self.more = more;
        self.subscribeFandom = subscribeFandom;
        self.addFandomsToUser = addFandomsToUser;
        self.more();

        function more  () {
            if (self.canLoadMore) {
                self.pagination.skip = self.pagination.page * self.pagination.perPage - self.pagination.perPage;
                FandomsService
                    .getFandoms(self.pagination)
                    .then(function (data) {
                        if (data.success) {
                            angular.forEach(data.fandoms, function (val) {
                                self.items.push(val);
                            });
                            if(data.end){
                                self.canLoadMore = false;
                                self.showNotification = true;
                            }

                        } else {
                            self.canLoadMore = false;
                        }
                        self.loading = false;
                    });
            } else {
                self.showNotification = true;
                (function () {
                    setTimeout(function () {
                        self.showNotification = false;
                        $scope.$apply();
                    }, 1000);
                }());
            }
        }


        function subscribeFandom (item) {
            if (self.subscribedFandoms.indexOf(item._id) <=-1) {
                self.subscribedFandoms.push(item._id);
                item.subscribed = true;
                self.numberOfFandoms -= 1;
            } else {
                self.subscribedFandoms.splice(self.subscribedFandoms.indexOf(item._id), 1);
                item.subscribed = false;
                self.numberOfFandoms += 1 ;

            }
        }

        function addFandomsToUser () {
            $log.info($rootScope.userName);
            $log.info(self.items);
            if ($rootScope.userName) {
                FandomsService
                    .addFandomsToUser($rootScope.userName, self.subscribedFandoms)
                    .then(onSuccess, onError);
            }
        }

        function onSuccess (data) {
            $state.go('join.login');

        }
        function onError (err) {
            console.log(err);
        }
    }
}());