const fibonacci = function(a) {
    if(a<0) return "OOPS";
    fib = [1,1];
    for (i = 2; i < a; i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib[fib.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
