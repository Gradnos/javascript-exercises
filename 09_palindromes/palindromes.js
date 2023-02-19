const palindromes = function (string) {
string = string.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s/g, "");

let splitStr = string.split("");
let reverseArray = splitStr.reverse();
let srtingReverse = reverseArray.join("");
return string === srtingReverse;
};

// Do not edit below this line
module.exports = palindromes;
