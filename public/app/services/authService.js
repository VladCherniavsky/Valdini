angular
	.module('myApp')
	.service('authService', ['$http', authUserService]);

	function authUserService($http){
		this.getUser=function(){
			return $http({
				method:'GET',
				url:'api/user/me'
			}).then(function(res){
				return res.data;
			}).catch(function(reject){
				throw reject;
			});
		};

	}
