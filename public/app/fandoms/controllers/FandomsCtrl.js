(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('FandomsCtrl', ['$window', '$state','$rootScope', 'FandomsService','$scope', FandomsCtrl]);

    function FandomsCtrl($window, $state,$rootScope, FandomsService, $scope) {
        var self = this;
        self.subscribedFandoms = [];
        self.numberOfFandoms = 10;
        self.items = [];
        self.loading = false;
        self.canLoadMore = true;
        self.showNotification = false;
        self.pagination = {
            page: 1,
            perPage: 4,
            skip:0
        }

        self.more = function () {
            console.log(self.canLoadMore);
            if (self.canLoadMore) {
                self.pagination.skip = self.pagination.page * self.pagination.perPage - self.pagination.perPage;
                FandomsService
                    .getFandoms(self.pagination)
                    .then(function (data) {
                        if (data.success) {
                            angular.forEach(data.fandoms, function (val, keys) {
                                var newItem = val;
                                console.log(newItem);
                               // newItem.number = self.items.length + 1;
                                self.items.push(newItem);
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
                        console.log(self.showNotification);
                        $scope.$apply();
                    }, 1000);
                }());
            }
        };
        self.more();

        self.subscribeFandom = function (item) {
            if (self.subscribedFandoms.indexOf(item._id) <=-1) {
                self.subscribedFandoms.push(item._id);
                item.subscribed = true;
                self.numberOfFandoms -= 1;

                console.log(self.subscribedFandoms);
            } else {
                self.subscribedFandoms.splice(self.subscribedFandoms.indexOf(item._id), 1);
                item.subscribed = false;
                self.numberOfFandoms += 1 ;
                console.log(self.subscribedFandoms);
            }

        };




    }
}());