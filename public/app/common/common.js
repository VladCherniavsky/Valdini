(function(){
	angular
  .module('myApp')
  .service('commonService', ['$http','$window','$q', commonService]);

  function commonService($http,$window,$q){
    var self = this;
    var deferred = $q.defer();
    this.checkAuth = function(){
        console.log('call check auth');
        self.getToken()
            .then(function(data){
                if(data){
                    console.log(data);
                    
                    self.checkToken(data)
                        .then(function(res){
                            
                            if(res){
                                console.log(res);
                                deferred.resolve(res);
                            }
                            else{
                                deferred.reject(new Error('no token'));
                            }
                            console.log(deferred.promise);
                            
                        });
                    
                    }
                });

            return deferred.promise;
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
        .then(function(res){               

            return res.data;
        });				

    };


    this.getToken = function(){
        console.log('call getToken');
        var token =$window.localStorage.token;
        var deferred = $q.defer();                
        if(token){
           deferred.resolve(token);
       }
       else{
           deferred.reject(false);
       }
       return deferred.promise;
   };
}


})();