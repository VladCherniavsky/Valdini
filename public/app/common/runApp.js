angular
    .module('myApp')
            .run(['$rootScope','commonService','$state', run]);

            function run ($rootScope, commonService, $state){
                console.log("I'm first");
                commonService
                    .checkAuth()
                        .then(successHandle,errorHandle);

                        function successHandle(data){
                           if(data.success){
                               console.log('run success');
                               $state.go('users');
                           }else{
                               $state.go('join.login');
                           }

                        }
                        function errorHandle(data){
                            console.log('errorHandle');
                            $state.go('join.login');
                        }  
       }
    

     