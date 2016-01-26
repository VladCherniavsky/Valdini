(function () {
    'use strict';
    angular.module('myApp')
        .service('FandomsService', ['$http', FandomsService]);

    function FandomsService($http) {
        var self = this;
        console.log('fandoms  service ok');
        self.getFandoms = function (options) {
            console.log(options);
            return $http({
                method: 'GET',
                url: 'api/fandoms',
                params: options
            })
                .then(function (res) {
                    console.log(res.data);
                    return res.data;
                }, function (err) {
                    throw err;
                });
        };
    }
}());