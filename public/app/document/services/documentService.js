/**
 * Created by vlad.cherniavsky on 10.02.2016.
 */
(function () {
    'use strict';
    angular.module('myApp')
        .service('documentService', documentService);

    documentService.$inject = ['$http', 'Upload'];

    function documentService($http, Upload) {
        console.log('documentService  service ok');

        var self = this;
        self.uploadDocument = uploadDocument;
        self.getLogs = getLogs;



        function uploadDocument  (file) {
            console.log(file);
            file.upload = Upload.upload({
                url: 'api/document/upload',
                method: 'POST',
                data: {file: file}
            });
            return file.upload;
        }

        function getLogs () {
            return $http({
                method: 'GET',
                url: 'api/document/logs'
            })
                .then(function (res) {
                    var length = res.data.logs.length - 1;
                    console.log(res.data.logs);

                    return res.data.logs[length];
                }).catch(function(err) {
                    console.log(err);
                });
        }

    }
}());
