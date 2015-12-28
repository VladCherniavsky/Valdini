angular
	.module('myApp', ['ui.router'])
	.controller('mainCtrl', ['$scope','registerUserService',mainCtrl]);

	function mainCtrl($scope,registerUserService){	
	
		$scope.email='';
		$scope.password='';

		$scope.registerUser=function (){
			var user = {
				email:$scope.email,	
				password:$scope.password
			};
			console.log(user);

			registerUserService
				.registerUser(user)
				.then(function(res){
					console.log(res);
				});
		}
	}
