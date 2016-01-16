angular
    .module('myApp')
            .run(['$rootScope','commonService','$state', run]);

            function run ($rootScope, commonService, $state){
                commonService
                    .checkAuth()
                        .then(successHandle,errorHandle);

                        function successHandle(data){
                            $state.go('users');
                        }
                        function errorHandle(data){
                            console.log('errorHandle');
                            $state.go('join.login');
                        }  
       }
    

     