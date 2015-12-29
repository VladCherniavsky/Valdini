angular
	.module('myApp', ['ui.router'])
	.controller('mainCtrl', ['$scope','registerUserService','loginService',mainCtrl]);

	function mainCtrl($scope,registerUserService,loginService){	
	
		
		$scope.credentials={
			email:'',
			password:'',
			clearCredentials:function(){
				this.email='';
				this.password='';
			}
		};
		$scope.tabs={
			loginTab:true,
			registrationTab:false
		};

		$scope.registerUser=function (){
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

		$scope.loginUser = function(){
			var user = {
				email:$scope.credentials.email,	
				password:$scope.credentials.password
			};
			loginService
				.loginUser(user)
				.then(function(res){
					console.log(res);
					$scope.credentials.clearCredentials();
				});

		};
		$scope.cancelUser=function(){
			$scope.credentials.clearCredentials();
		}
	}
