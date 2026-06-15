const carriage1 = ["Maithili", "Zendria", "Tanisha"]; 
const emptyCarriage = [];
//
console.log(carriage1);
console.log(emptyCarriage);
//
const threeEmptySeats = Array(3);
console.log(threeEmptySeats.length);
const passenger = Array("Abhay", "Prince", "Wine");
//
const singlePassenger = Array.of(3);
console.log(singlePassenger);
//
const trainCode = Array.from("DUST");
console.log(trainCode);
//
const tempTrain = ["A", "b", "h", "a", "y"];
tempTrain.length = 3;
console.log(tempTrain);
tempTrain.length = 5;
console.log(tempTrain);
// ! here.. after you give tempTrain length = 3 then again give it 5... so the orignal value of last 2 element is remove and say it empty space.


const PlayerData = ["Abhay", "Dok", "Top", "Suk"];
const PlayerStats = ["None"];
PlayerData.push("Cariliho");
PlayerData.pop();
PlayerData.shift();
PlayerData.unshift("SthundeRR");
PlayerData.splice(0,"Abhays");
// ! splice is not understable... 
console.log(PlayerData);
//
const arr = PlayerData.concat(PlayerStats);
const arr2 = PlayerData.slice(0,-2);
const arr3 = PlayerData.flat();
// ! flat is not understable...
console.log(arr3);
// !!

