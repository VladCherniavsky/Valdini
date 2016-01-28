(function(){
    angular
        .module('myApp')
        .run(runBlock);

    runBlock.$inject = ['$rootScope', 'CommonService', '$state'];

    function runBlock ($rootScope, CommonService, $state) {
        CommonService
            .checkAuth()
            .then(successHandle, errorHandle);

        $rootScope.$on('$stateChangeStart', stateChangeStart);

        function stateChangeStart (e, toState) {
            if ((toState.needName) && (!$rootScope.userName )) {
                e.preventDefault();
                $state.go('join.login');
            }
        }
        function successHandle (data) {
            if (data.success) {
                $state.go('home');
                $rootScope.loggedIn = true;
            } else {
                $rootScope.loggedIn = false;
                $state.go('join.login');
            }
        }
        function errorHandle () {
            $state.go('join.login');
        }
    }
}());
