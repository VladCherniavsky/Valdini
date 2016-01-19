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

    }
}());