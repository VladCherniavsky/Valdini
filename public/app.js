angular
	.module('myApp', ['ui.router'])
	.controller('mainCtrl', ['$scope','registerUserService','loginService','$window',mainCtrl]);

	function mainCtrl($scope,registerUserService, $window){		
		
	
		

		/*$scope.registerUser=function (){
			var user = {
				email:$scope.credentials.email,	
				password:$scope.credentials.password
			};
			console.log(user);

			registerUserService
				.registerUser(user)
				.then(function(res){
					console.log(res);
					$scope.credentials.clearCredentials();
				});
		};
*/
		
		
		
	}
