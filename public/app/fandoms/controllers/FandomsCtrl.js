(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('FandomsCtrl', ['$window', '$state','$rootScope', 'FandomsService', FandomsCtrl]);

    function FandomsCtrl($window, $state,$rootScope, FandomsService) {
        var self = this;
        self.numberOfFandoms = 10;
        self.items = [];
        self.loading = false;
        self.pagination = {
            page: 1,
            perPage: 7,
            skip:0
        }

        self.more = function () {
            self.pagination.skip = self.pagination.page * self.pagination.perPage - self.pagination.perPage;
            console.log(self.pagination);
            FandomsService
                .getFandoms(self.pagination)
                .then(function (data) {
                    angular.forEach(data.users, function (val, keys) {
                        var newItem = val;
                        newItem.number = self.items.length + 1;
                        self.items.push(newItem);

                    });
                    self.loading = false;

                });

        };
        self.more();



    }
}());