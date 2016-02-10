/**
 * Created by vlad.cherniavsky on 10.02.2016.
 */
module.exports = function (strDateTime) {
    var dateTimeArray = strDateTime.split(' ');

    var strDate = dateTimeArray[0];
    var strTimeArray = dateTimeArray[1].split('.');
    var strTime = strTimeArray[0];
    var milliseconds = strTimeArray[1];

    var strTimeParts = strTime.split(':');
    var strDateParts = strDate.split('.');

    var year = strDateParts[2];
    var month = strDateParts[1];
    var day = strDateParts[0];
    var hour = strTimeParts[0];
    var minutes =  strTimeParts[1];
    var seconds = strTimeParts[1];
    var milliseconds = strTimeArray[1];

    var date = new Date(year, month, day, hour, minutes, seconds, milliseconds);
    console.log('ms', date.getMilliseconds());

    return date;
}
