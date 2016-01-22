(function () {
    'use strict';
    angular.module('myApp')
        .service('usersService', ['$http', usersFn]);

    function usersFn($http) {
        var self = this;
        console.log('users service ok');
        self.getAllUsers = function () {
            return $http({
                method: 'GET',
                url: 'api/users'
            })
                .then(function (res) {
                    console.log(res.data);
                    return res.data;
                }, function (err) {
                    throw err;
                });
        };
        self.addInfo = function (user) {
            console.log(user);
            return  $http({
                method: 'POST',
                url: 'api/addInfo',
                data: user
            }).then(function (res) {
                return res.data;
            });
        };
        self.addFandoms = function (userFandoms) {
            console.log(arrayFandoms);
            return $http({
                method: 'POST',
                url: 'api/addFandoms',
                data: userFandoms
            }).then(function (res) {
                return res.data;
            });
        };

    }
}());