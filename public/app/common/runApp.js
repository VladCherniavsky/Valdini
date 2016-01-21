angular
    .module('myApp')
            .run(['$rootScope', 'commonService', '$state', run]);

function run ($rootScope, commonService, $state) {
    console.log("I'm first");
    commonService
        .checkAuth()
            .then(successHandle, errorHandle);

    $rootScope.$on('$stateChangeStart', function (e, toState) {
        console.log($rootScope.userName);
        if ((toState.needName === true) && ($rootScope.userName === undefined || $rootScope.userName === '')) {
            e.preventDefault();
            $state.go('join.login');
        }
    });

    function successHandle(data) {
        if (data.success) {
            $state.go('home');
            $rootScope.loggedIn = true;
        } else {
            $rootScope.loggedIn = false;
            $state.go('join.login');
        }
    }
    function errorHandle(data) {
        console.log('errorHandle');
        $state.go('join.login');
    }
}