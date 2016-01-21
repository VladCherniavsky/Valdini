(function(){
angular
    .module('myApp')
    .service('registrationService',['$http',registerUser ]);


    function registerUser($http){
        console.log('register service ok');
        this.registerUser=function(user){
            console.log(user);
            return  $http({
                method:'POST',
                url:'api/register',
                data:user
            }).then(function (res) {
                return res.data;
            });
        };
    }
}());