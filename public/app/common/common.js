
(function(){
   
	angular
  .module('myApp')
  .service('commonService', ['$http','$window','$q', commonService]);

  function commonService($http,$window,$q){
    var self = this;
    var deferred = $q.defer();
    this.checkAuth = function(){
        console.log('call check auth');
       
        console.log(self);
        self.getToken()
            .then(function(data){               
                if(data){
                    self.checkToken(data)
                    .then(function(res){
                        if(res){
                            deferred.resolve(res);
                        }
                        else{
                            deferred.reject(new Error('no token'));
                        }
                    });
                    
                    }
                },function(err){
                    console.log('no token in local storage');
                    console.log(err);
                     deferred.reject(false);
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