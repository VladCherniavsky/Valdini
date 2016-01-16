(function(){
angular
	.module('myApp')
	.config(['$stateProvider','$urlRouterProvider', config]);

	function config($stateProvider,$urlRouterProvider){

 $urlRouterProvider.otherwise('/');

		$stateProvider
			.state('join', {
				url:'/join',
				templateUrl:'views/securityForm.html',
				controller:'authCtrl',
				controllerAs:'auth'/*,
				views:{
					"content":{
						template:"<ui-view />"
					}
				}*/
			})
			.state('join.login', {
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'loginCtrl',
				controllerAs: 'login',
			})
			.state('join.signup', {
				url: '/signup',
				templateUrl: 'views/registration.html',
				controller: 'registrationCtrl',
				controllerAs: 'registration',
			});	
			
	}
})();