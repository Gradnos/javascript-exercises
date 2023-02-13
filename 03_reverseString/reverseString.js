const reverseString = function(startString) {
    let finishedString = '';
    for (i = startString.length - 1; i>=0; i--) finishedString+=startString[i];
    return finishedString;
};

// Do not edit below this line
module.exports = reverseString;
