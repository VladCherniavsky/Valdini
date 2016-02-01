(function () {
    'use strict';
    angular.module('myApp')
        .service('FandomsService', FandomsService);

    FandomsService.$inject = ['$http'];

    function FandomsService($http) {
        console.log('fandoms  service ok');

        var self = this;
        self.getFandoms = getFandoms;
        self.addFandomsToUser = addFandomsToUser;


        function getFandoms  (options) {
            console.log(options);
            return $http({
                method: 'GET',
                url: 'api/fandoms',
                params: options
            })
                .then(function (res) {
                    console.log(res.data);
                    return res.data;
                }).catch(function(err) {
                    console.log(err);
                });
        }

        function addFandomsToUser (username, fandomsArray) {
            console.log(username);
            console.log(fandomsArray);
            return $http({
                method: 'POST',
                url: 'api/fandoms',
                data:{
                    username: username,
                    fandoms: fandomsArray
                }
            })
                .then(function (res) {
                    console.log(res.data);
                    return res.data;
                }).catch(function (err) {
                    console.log(err);
                });
        }
    }
}());

