(function () {
    angular
        .module('myApp')
        .service('CommonService', CommonService);

    CommonService.$inject = ['$http','$window','$q', '$state', '$rootScope'];

    function CommonService($http, $window, $q, $state, $rootScope) {

        var self = this;

        self.checkAuth = checkAuth;
        self.checkToken = checkToken;
        self.clearObj = clearObj;
        self.getToken = getToken;
        self.logout = logout;






        function checkAuth () {
            var deferreddd = $q.defer();
            self.getToken()
                .then(function (token) {
                    if (token) {
                        self.checkToken(token)
                            .then(function (res) {
                                console.log(res);
                                if (res.success) {
                                    deferreddd.resolve(res);
                                } else {
                                    deferreddd.resolve(res);
                                }

                            }, function (err) {
                                return deferreddd.reject(err);
                            });
                    }
                }, function (err) {
                    deferreddd.reject(err);
                });
            return deferreddd.promise;
        }


        function checkToken (token){
            return $http({
                method:'POST',
                url:'api/checkToken',
                data:{
                    token:token
                }
            })
                .then(function (res) {
                    var deferred = $q.defer();
                    console.log(res);
                    if(res.data.success) {
                        deferred.resolve(res.data);
                    } else {
                        deferred.reject(res.data);
                    }
                    return deferred.promise;
                }).catch(function (err) {
                    console.log(err);
                    return err;
                });

        }

        function getToken () {
            var token = $window.localStorage.token;
            var deferred = $q.defer();
            if(token){
                deferred.resolve(token);
            }
            else{
                deferred.reject(false);
            }
            return deferred.promise;
        }

        function clearObj (obj){
            for (var prop in obj){
                obj[prop]='';
            }
        }


        function logout() {
            return (function () {
                console.log('log out called');
                $window.localStorage.clear();
                $rootScope.loggedIn = false;
                $state.go('join.login');
            }());

        }


}
}());