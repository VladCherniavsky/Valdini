angular
    .module('myApp')
            .run(['$rootScope', 'CommonService', '$state', run]);

function run ($rootScope, CommonService, $state) {
    CommonService
        .checkAuth()
            .then(successHandle, errorHandle);

    $rootScope.$on('$stateChangeStart', function (e, toState) {
        if ((toState.needName === true) && ($rootScope.userName === undefined || $rootScope.userName === '')) {
            e.preventDefault();
            $state.go('join.login');
        }
    });

    function successHandle (data) {
        if (data.success) {
            $state.go('home');
            $rootScope.loggedIn = true;
        } else {
            $rootScope.loggedIn = false;
            $state.go('join.login');
        }
    }
    function errorHandle (data) {
        $state.go('join.login');
    }
}