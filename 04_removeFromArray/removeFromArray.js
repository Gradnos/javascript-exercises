const removeFromArray = function(givenArray, ...unwanted) {
    for(i = 0; i < givenArray.length; i++){
        for(j = 0; j <unwanted.length; j++){
            if (givenArray[i] === unwanted[j]) {
                givenArray.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
