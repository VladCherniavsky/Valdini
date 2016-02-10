(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('DocumentController', DocumentController);

    DocumentController.$inject = ['$state', 'FileUploader' ];

    function DocumentController($state, FileUploader) {

        var uploader = this.uploader = new FileUploader({
            url: 'api/document/upload'
        });


        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };


    }
}());