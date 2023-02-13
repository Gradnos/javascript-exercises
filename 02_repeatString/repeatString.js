const repeatString = function(repString, times) {
    if (times < 0) return "ERROR";
    let finalString = '';
    for(i=0; i<times; i++) finalString+=repString;
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
