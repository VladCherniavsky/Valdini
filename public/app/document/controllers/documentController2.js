(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('DocumentController', DocumentController);

    DocumentController.$inject = ['$state', 'Upload', '$timeout'];

    function DocumentController($state, Upload, $timeout) {

        this.uploadPic = function(file) {
            console.log(file);
           file.upload = Upload.upload({
                url: 'api/document/upload',
                method: 'POST',
                data: {file: file}
            });

          file.upload.then(function (response) {
                console.log(response);
                    file.result = response.data;

            }, function (response) {
              console.log(response);

            }, function (evt) {
              console.log(evt);
                // Math.min is to fix IE which reports 200% sometimes
              console.log();
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        };


    }
}());