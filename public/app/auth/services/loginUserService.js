angular
	.module('myApp')
	.service('loginService', ['$http','$window', loginUserService]);

	function loginUserService($http,$window ){
		this.loginUser=function(user){
			return $http({
				method:'POST',
				url:'api/login',
                data:user
			}).then(function(res){

				return res.data;
			}).catch(function(reject){
				throw reject;
			});
		};
        this.test=function(){
            return $http({
                method:'GET',
                url:'api/vlad',
                headers:{
                    'x-access-token':getToken()
                }
              
            }).then(function(res){                
                return res.data;
            }).catch(function(reject){
                throw reject;
            });
        };
        function getToken(){
            var token =$window.localStorage.token;
            console.log(token);
            return token;
        }

	}
