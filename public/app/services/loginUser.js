angular
	.module('myApp')
	.service('loginService', ['$http', loginUserService]);

	function loginUserService($http){
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

	}
