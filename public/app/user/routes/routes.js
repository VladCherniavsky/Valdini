(function(){
angular
	.module('myApp')
	.config(['$stateProvider','$urlRouterProvider', config]);

	function config($stateProvider,$urlRouterProvider){

 $urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('login', {
				url:'/login',
				templateUrl:'views/login.html',
				controller:'loginCtrl',
				controllerAs:'login'
			});
	}
})();