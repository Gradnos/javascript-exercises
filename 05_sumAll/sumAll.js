const sumAll = function(int1, int2) {
    if (typeof int1 !== "number" || typeof int2 !== "number" || int2 < 0 || int1 < 0) return "ERROR";
    let avgValue = (int1+int2)/2;
    let amount = Math.abs(int2 - int1) + 1;
    return avgValue * amount;
};

// Do not edit below this line
module.exports = sumAll;
