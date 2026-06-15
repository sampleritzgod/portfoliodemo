const orders = [
    { dish: "Pani-Puri", price: 40, spicy: true, qty: 2},
    { dish: "Pav-Bhaji", price: 70, spicy: false, qty: 1},
    { dish: "Ice-cream", price: 45, spicy: false, qty: 3},
    { dish: "Pasta", price: 90, spicy: true, qty: 4},
];
//
const myData = orders.forEach((order, index)=>{
    console.log(`#${index + 1} : ${order.qty}x ${order.dish}`);
})
// console.log(myData);  - here in last why show undefined
const receiptLines = orders.map((o) => `${o.dish} : $${o.price * o.qty}`);
console.log(receiptLines);
//
const SpicyOrders = orders.filter((o)=> o.spicy);
console.log(SpicyOrders);
//
const totalRevenue = orders.reduce((sum, order)=>{
    return sum + order.qty * order.price;
}, 0);
console.log(totalRevenue);
//
const grouped = orders.reduce((acc, order)=>{
    const category = order.spicy ? "spicy" : "mild";

    acc[category].push(order.dish);
    return acc;
},
{spicy: [], mild: []},);

console.log(grouped);
//

const PlayerData = [
    {player: "Abhay", Stats: 2, FDratio: 4.2, Role: "IGL", StrongGun: "M416", HigestDamage: 1200, TeamName: "4 Fantastic Men", ContactNo: 9104737283},
    {player: "Hardik", Stats: 10, FDratio: 0.2, Role: "IGL", StrongGun: "ShotGun", HigestDamage: 100, TeamName: "Astra7", ContactNo: 9104737281},
    {player: "Shubham", Stats: 3, FDratio: 3.2, Role: "Assulter", StrongGun: "Mini14", HigestDamage: 1000, TeamName: "4 Fantastic Men", ContactNo: 9104737280},
    {player: "Sam", Stats: 4, FDratio: 1.2, Role: "Assulter", StrongGun: "M416", HigestDamage: 200, TeamName: "4 Fantastic Men", ContactNo: 9104737289},
    {player: "Prince", Stats: 1, FDratio: 5.2, Role: "EntryFragger", StrongGun: "M416", HigestDamage: 1800, TeamName: "Astra7", ContactNo: 8320548806},
    {player: "Rahil", Stats: 5, FDratio: 1.9, Role: "Assulter", StrongGun: "Kar98K", HigestDamage: 102, TeamName: "Astra7", ContactNo: 9104747283},
    {player: "Wine", Stats: 9, FDratio: 0.3, Role: "Assulter", StrongGun: "FlareGun", HigestDamage: 10, TeamName: "DarkSideEsport", ContactNo: 8104737283},
    {player: "Lisu", Stats: 7, FDratio: 2.2, Role: "Support", StrongGun: "M24", HigestDamage: 250, TeamName: "4 Fantastic Men", ContactNo: 9105737283},
    {player: "Xtron", Stats: 8, FDratio: 1.0, Role: "IGL", StrongGun: "M416", HigestDamage: 1200, TeamName: "4 Fantastic Men", ContactNo: 9104737283},
    {player: "Abhay", Stats: 2, FDratio: 4.2, Role: "IGL", StrongGun: "M416", HigestDamage: 1200, TeamName: "4 Fantastic Men", ContactNo: 9104737283},
]