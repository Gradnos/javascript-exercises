const findTheOldest = function(a) {
const date= new Date().getFullYear();
let oldest = a.reduce((old, person) =>{
    if(old === 0) old = person;
    let time;
    if (person.yearOfDeath === undefined) person.yearOfDeath = date;
    if ((person.yearOfDeath-person.yearOfBirth) > (old.yearOfDeath-old.yearOfBirth)) return person;
    return old;
}, 0);

return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
