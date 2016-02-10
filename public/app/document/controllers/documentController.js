(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('DocumentController', DocumentController);

    DocumentController.$inject = ['$state', 'documentService'];

    function DocumentController($state, documentService ) {
        var self = this;
        self.uploadPic = uploadPic;
        self.getLogs = getLogs;
        self.showChart = showChart;
        self.arrayForChart = [];
        self.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.time;},
                y: function(d){return d.number;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };





        function uploadPic (file) {
            console.log(file);
            documentService.uploadDocument(file)
                .then(function (response) {
                  console.log(response.data);
                  file.result = response.data;
              }, function (response) {
                  console.log(response);
              }, function (evt) {
                  console.log();
                  file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }

        function getLogs () {
            console.log('ddd');
            documentService.
                getLogs()
                .then(function (data) {
                    self.data = data.logs;
                    fiilDataArrayForChart(data.logs);
                });

        }
        function fiilDataArrayForChart (array) {
            console.log(array);
            console.log(array.length);
            var currentTime = new Date(array[0][0]);
            var numberOfTheSameTime = 0;

            for (var i = 0; i < array.length; i++) {
                var indexDate = new Date(array[i][0]);

                if(currentTime.getYear() == indexDate.getYear()
                    && currentTime.getMonth() == indexDate.getMonth()
                    && currentTime.getDate() == indexDate.getDate()
                    && currentTime.getHours() == indexDate.getHours()
                    && currentTime.getMinutes() == indexDate.getMinutes()) {
                       numberOfTheSameTime += 1;
                    console.log(numberOfTheSameTime);



                } else {
                    self.arrayForChart.push({
                        time:currentTime.toTimeString(),
                        number: numberOfTheSameTime
                    });
                    currentTime = new Date(array[i][0]);
                    numberOfTheSameTime = 0;
                    i = i-1;
                    console.log('changesTime', currentTime);

                }
                if (array.indexOf(array[i]) == array.length -1) {
                    self.arrayForChart.push({
                        time:currentTime.toTimeString(),
                        number: numberOfTheSameTime
                    });
                    console.log('lst',array[i] );
                }
            }
            console.log(self.arrayForChart);
        }
        function showChart () {
            getLogs();
        }


    }
}());