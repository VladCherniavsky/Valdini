(function () {
    'use strict';
    angular
        .module('myApp')
        .directive('whenScrolled', directiveFn);

    function directiveFn () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {

                var raw = elem[0];
                console.log(scope.Fandoms.pagination.page);
                console.log(scope.Fandoms.loading);
                elem.bind('scroll', function () {
                    if (raw.scrollTop + raw.offsetHeight + 5 >= raw.scrollHeight) {
                        scope.Fandoms.pagination.page += 1;
                        console.log(scope.Fandoms.pagination.page);
                        scope.Fandoms.loading = true;
                        scope.$apply(attrs.whenScrolled);
                    }
                });
            }
        };
    }

}());


