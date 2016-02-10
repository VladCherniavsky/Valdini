/**
 * Created by vlad.cherniavsky on 10.02.2016.
 */
module.exports = function (array) {

    var dataObj = {
        saveToDb: [],
        skippedItems: []
    };
    var arrayLength = array.length;
    if (arrayLength > 0) {

       for (var i =0; i < arrayLength; i++) {

           if (array[i].length === 5 || array[i].length === 6 ) {
               var indexSavedItems = array.indexOf(array[i]);
               dataObj.saveToDb.push(array[i]);
           }
           else {
               dataObj.skippedItems.push(array.indexOf(array[i]) + 1);
           }
       }
    }
    return dataObj;

};
