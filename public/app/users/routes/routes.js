(function(){
angular
	.module('myApp')
	.config(['$stateProvider','$urlRouterProvider', config]);

	function config($stateProvider,$urlRouterProvider){


		$stateProvider
			.state('users', {
				url:'/users',
				templateUrl:'views/allUsers.html',
				controller:'usersCtrl',
				controllerAs:'users'

			});	
			
	}
}())