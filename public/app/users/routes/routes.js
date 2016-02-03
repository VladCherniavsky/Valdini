(function(){
angular
	.module('myApp')
	.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider,$urlRouterProvider){

		$stateProvider
			.state('users', {
				url:'/users',
				views: {
					nav: {
						templateUrl: 'views/navbar.html',
                        controller: 'CommonController',
                        controllerAs:'common'

					},
					content: {
						templateUrl: 'views/allUsers.html',
						controller:'UsersController',
						controllerAs:'users'
					}
				}

			});	
			
	}
}());