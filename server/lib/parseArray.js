var  parseDatetime = require('../lib/parseDateTime');

    function removeWhiteSpaceFromArray (array) {
    array = array.filter(function(str) {
        return /\S/.test(str);
    });
        array[0]=parseDatetime(array[0]);

    return array;

}
module.exports = removeWhiteSpaceFromArray;