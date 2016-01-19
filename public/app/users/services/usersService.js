(function () {
    'use strict';
    angular.module('myApp')
        .service('usersService',['$http', usersFn]);

    function usersFn($http) {
        console.log('users service ok');
        this.getAllUsers = function() {
            return $http({
                method:'GET',
                url:'api/users'
            })
            .then(function(res){
                    console.log( res.data);
                    return res.data;
                },function(err){
                    throw err;
                });
        };

    }
}());