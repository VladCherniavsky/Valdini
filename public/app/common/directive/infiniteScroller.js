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
                elem.bind('scroll', function () {
                    if (raw.scrollTop + raw.offsetHeight + 60 >= raw.scrollHeight) {
                        scope.Fandoms.pagination.page += 1;

                        scope.Fandoms.loading = true;
                        scope.$apply(attrs.whenScrolled);
                    }
                });
            }
        };
    }
}());


