(function(){
angular
	.module('myApp')
	.config(['$stateProvider','$urlRouterProvider', config]);

	function config($stateProvider,$urlRouterProvider){


		$stateProvider
			.state('users', {
				url:'/users',
				controller:'usersCtrl',
				controllerAs:'users',
				views: {
					nav: {
						templateUrl: 'views/navbar.html'
					},
					content: {
						templateUrl: 'views/allUsers.html'
					}
				}

			});	
			
	}
}())