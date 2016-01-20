
(function () {
    angular
        .module('myApp')
        .service('commonService', ['$http','$window','$q', commonService]);
    function commonService($http, $window, $q) {
        var self = this;
        var deferreddd = $q.defer();
        self.checkAuth = function () {
            console.log('call check auth');
            self.getToken()
                .then(function (token) {
                    if (token) {
                        self.checkToken(token)
                            .then(function (res) {
                                console.log(res)
                                if (res.success) {
                                    console.log('token resolved');
                                    deferreddd.resolve(res);
                                }
                            }, function (err) {
                                console.log(err);
                                deferreddd.reject(err);
                            });
                    }
                }, function (err) {
                    console.log('no token in local storage');
                    console.log(err);
                    deferreddd.reject(false);
                });
            console.log(deferreddd.promise);

            return deferreddd.promise;
        };
    this.checkToken=function(token){
        console.log('call checkToken');
        return $http({
           method:'POST',
           url:'api/checkToken',
           data:{
            token:token
           }
        })
            .then(function (res) {
                var deferred = $q.defer();
                console.log(res.data.success);
                if(res.data.success) {
                    console.log(res.data);
                    deferred.resolve(res.data);
                } else {
                    console.log(res.data)
                    deferred.reject(res.data);
                }

                return deferred.promise;
            }, function(err){
                console.log(err);
                throw err;
            });

    };


    this.getToken = function(){
        console.log('call getToken');
        var token =$window.localStorage.token;
        console.log(token);
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
    console.log('call clear')
        for(var prop in obj){
            obj[prop]='';
        }
   };
}


})();