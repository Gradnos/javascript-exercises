const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let num = a.reduce((plus, number) =>{
    return plus +  (+number);
  }, 0);



  //return(a[0]);
  return num;
};

const multiply = function(a) {
  let num = a.reduce((plus, number) =>{
    return plus *  (+number);
  }, 1);

  return num;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  if(a===0) return 1;
   let fact = 1;
	for(i=1; i<=a; i++) fact *= i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
