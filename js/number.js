const crewMembers = 100;
const fueltons = 142.42;
const light_speed = 299_888_999;

const infiniteRange = Infinity;
console.log(infiniteRange);
const negativeInfiniteRange = -Infinity;
const NotANumber = NaN;
console.log(negativeInfiniteRange);
console.log(NotANumber);
//
console.log( 1/ 0);
console.log(-1 / 0);
//
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.isNaN(NotANumber));
///
const fuesReading = "142.75 tons";
const sectorCode = "0xA3";
const countDown = "007";

console.log(parseFloat(fuesReading));
console.log(parseFloat(sectorCode));
console.log(parseFloat(countDown)); // why consider last number...
//
console.log(parseInt("110", 3));
// ! doubt....

const thrustForce = 4.567;

console.log(Math.round(thrustForce));
console.log(Math.floor(thrustForce));
console.log(Math.ceil(thrustForce));
console.log(Math.trunc(thrustForce));
// console.log(Math.rounds(thrustForce));

const temps = [-120, 43, 56, -23];
console.log(Math.min(temps));

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

function almostEqual(a, b){
    return Math.abs(a - b ) < Number.EPSILON;
};

console.log(almostEqual(0.1 + 0.2 , 0.3));

