const codeName = "Shadow Fox";
const backupName = String("Night Own");
const templateName = `Agent ${codeName}`;
//
console.log(codeName);
console.log(backupName);
console.log(templateName);
//
let intercepted = "HELLLOJI";
intercepted[0] = "J" ; // silent Fail
console.log(intercepted);
//
const secretCode = "OMEGA-7";
console.log(secretCode.length);
console.log(secretCode.charAt(1));
console.log(secretCode[1]);
console.log(secretCode.at(-1));
//
const rawTransmission = "The EaGLE has LandeD";
console.log(rawTransmission.toLowerCase());
//
const message = "The drop point is at Dock 7. Repeat: Dock 7";
console.log(message.indexOf("Dock"));
console.log(message.slice(0,15));
//
const orders = "move-north|hold-position|extract-vip";
let orderList = orders.split("|");
console.log("Split", orderList);
//
const myDataValue = "SOS".split("");
console.log(typeof myDataValue);
console.log(Array.isArray(myDataValue));
//
const missionNumber = "42";
console.log(missionNumber.padStart(6, "0"));

const spellcard = `
++===================
| Spell : ${myDataValue} |` ;
console.log(spellcard);
//
console.log(void "abhay"); // undefined
//
let generalStore = {name: "Tanisha", goods: 2};
console.log(generalStore);
generalStore = null;
console.log(generalStore);
// ! 

