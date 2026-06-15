const Games = ["PUBG", "Clash-of-Clans", "GTA-V", "Mario"];
const IndoreGames = ["Chess", "Ludo", "BedMinton"];
console.log(Games);
Games.pop();
console.log(Games);
Games.push("Pal-World");
console.log(Games);

Games.shift();
console.log(Games);
Games.unshift("PUBG-MOBILE");
console.log(Games);
//
const mapped = Games.map((x)=> x + this);
console.log(mapped);
//
const FilterUpData = Games.filter((x) => x.length);
console.log(FilterUpData);

const fruits = ["apple", "mango", "cherry"];
fruits.unshift("watermelon");
console.log(fruits);
fruits.shift();
console.log(fruits);
//

const number = [2,4,6,8];
const Mapped = number.map((x)=> x * 2);
console.log(Mapped);
//
const numbers = [5, 8, 12, 20, 3, 15];

const result = numbers.filter(function(num) {
  return num > 10;
});

console.log(result);
//
const numbers1 = [5, 10, 15, 20];

const total = numbers1.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(total);
//
const numbers2 = [1, 2, 3, 4];

numbers2.forEach(function(num) {
  console.log(num);
});