(function () {
    angular
        .module('myApp')
        .service('CommonService', ['$http','$window','$q', CommonService]);
    function CommonService($http, $window, $q) {
        var self = this;
        var deferreddd = $q.defer();
        self.checkAuth = function () {
            self.getToken()
                .then(function (token) {
                    if (token) {
                        self.checkToken(token)
                            .then(function (res) {
                                if (res.success) {deferreddd.resolve(res);
                                }
                            }, function (err) {
                                return deferreddd.reject(err);
                            });
                    }
                }, function (err) {
                    deferreddd.reject(err);
                });
            return deferreddd.promise;
        };
    this.checkToken=function(token){
        return $http({
           method:'POST',
           url:'api/checkToken',
           data:{
            token:token
           }
        })
            .then(function (res) {
                var deferred = $q.defer();
                if(res.data.success) {
                    deferred.resolve(res.data);
                } else {
                    deferred.reject(res.data);
                }
                return deferred.promise;
            }).catch(function (err) {
                console.log(err);
            });

    };

    this.getToken = function(){
        var token = $window.localStorage.token;
        var deferred = $q.defer();
        if(token){
           deferred.resolve(token);
       }
       else{
           deferred.reject(false);
       }
       return deferred.promise;
   };
   this.clearObj=function(obj){
        for (var prop in obj){
            obj[prop]='';
        }
   };
}
}());