const weaponName = "M416";
console.log("weapon : ", weaponName, "| type: ", typeof weaponName);
//
const attackPower = 75;
const attackUpgrade = 1.5;
//
console.log(typeof attackPower);
console.log(typeof attackUpgrade);
//
const isLoggedIn = true;
let bonusEffect;

// as  long as  i alive , infinite chance to achieve my goal..

let curseStatus = null;
let weatherApiResponse = null;
console.log(typeof weatherApiResponse);
//
const uniqueRunId = Symbol("rune_of_fire");
const uniqueRunId2 = Symbol("rune_of_fire");
console.log(
    "Rune: ",
    uniqueRunId.toString(),
    "| type of:",
    typeof uniqueRunId,
);

const heroStats = {
    name: "Deepak",
    level: 12,
    class: "ranger",
    main_symnol: Symbol("Rare_of_Legend"),

};

console.log("Hero: ", heroStats, " | type:", typeof heroStats);
//
const inventory = ["Flame Sword", "Health Potion", "Shield"];
console.log("Inventory:", inventory, " | type:", typeof inventory);
//
function castSpell() {
    return "fireboll";
}
console.log("Spell Type ", typeof castSpell);
//
console.log(typeof "chaicode");
console.log(typeof 42);
console.log(typeof 42n);
console.log(true);
console.log(undefined);
console.log(null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(function () { });


//
const inventory2 = ["abhay", null, 34n, true];
console.log(inventory2);
console.log(typeof inventory2);
//
let originalHP = 100;
let cloneHP = originalHP;

cloneHP = 80;
console.log("Original HP :", originalHP);
console.log("Clone HP:", cloneHP);
//
const originalSword = {
    name: "Flame Sword",
    damage: 75,
    typeofW: "fire",
};
//
const cloneSword = originalSword;
cloneSword.damage = 100;
console.log("Original Sword: ", originalSword.damage);
console.log("CloneSword Damage :", cloneSword.damage);

const armorOriginal = {
    name: "Iron Plate",
    defence: 80,
    buff: {
        fire: 10,
    },
};

const armorCopy = { ...armorOriginal };
armorCopy.buff.fire = 90;
const potionOriginal = { name: "Health", effects: { heak: 40, mana: 30 } }
const potionCopy = structuredClone(potionOriginal)

typeof null === "object";
// array.isArray();

let HitPoint = 100;
HitPoint = null;
console.log(typeof HitPoint);
//
const Abality = Symbol(String("abhay"));
console.log("Abality: ", Abality.description);
console.log(typeof Abality);
//

let SquadStats = {
    const: Player1 = {
        name: "Abhay",
        Role: "Assulter-IGL",
        FDRatio: 3.54,
    },
    const: Player2 = {
        name: "Hardik",
        Role: "Assulter",
        FDRatio: 0.54,
    },
    const: Player3 = {
        name: "Prince",
        Role: "Assulter",
        FDRatio: 4.54,
    },
    const: Player4 = {
        name: "Rahil",
        Role: "Assulter",
        FDRatio: 5.54,
    },
}
// console.log(SquadStats.const.Player1.FDRatio);

const SquadStats1 = [Player1 = {
    name: "Abhay",
    Role: "Assulter-IGL",
    FDRatio: 3.54,
},
Player2 = {
    name: "Hardik",
    Role: "Assulter",
    FDRatio: 0.54,
},
Player3 = {
    name: "Prince",
    Role: "Assulter",
    FDRatio: 4.54,
},
Player4 = {
    name: "Rahil",
    Role: "Assulter",
    FDRatio: 5.54,
},];

console.log(SquadStats1);
///
let OriginalHitPoint = 100;
let cloneHitPoint = OriginalHitPoint;
cloneHitPoint = 75;

console.log(OriginalHitPoint);
console.log(cloneHitPoint);
// console.log(OriginalHitPoint);
//
const MainPower = {
    name: "Flame Throver",
    damage: 87,
    typeofAttack: "fire"
}
// - think at all... (why this full copy as it is ...)
// const CloneMainPower = MainPower;
// CloneMainPower.name = "electro-web";

// console.log(MainPower);
// console.log(CloneMainPower);

const CloneMainPower = { ...MainPower };
CloneMainPower.damage = 99;
CloneMainPower.name = "Electro-web";
CloneMainPower.typeofAttack = "Electric";
console.log(MainPower);
console.log(CloneMainPower);
//
const EmpRate = {
    Country: "India",
    code: 34567,
    jobs: [
        {
            role: "Finance",
            avg_salary: "25 lakh",
            experience_min: "3-4 Years"
        },
        {
            role: "Software Developer",
            avg_salary: "18 lakh",
            experience_min: "2-3 Years"
        },
        {
            role: "HR Manager",
            avg_salary: "12 lakh",
            experience_min: "4-5 Years"
        }
    ],
    Countary2: [
        {
            Country: "US",
            code: 23452,
            jobs: [
                {
                    role: "Data-Enginner",
                    avg_salary: "25 lakh",
                    experience_min: "3-4 Years"
                },
                {
                    role: "software-Design",
                    avg_salary: "18 lakh",
                    experience_min: "2-3 Years"
                },
                {
                    role: "HR Manager",
                    avg_salary: "12 lakh",
                    experience_min: "4-5 Years"
                }
            ]
        }
    ]
};
console.log(EmpRate);
console.log(EmpRate.Countary2.jobs);
// ! i think this  rabit hole i solve in later...

const PositionHolder = {name: "Dark_Health", effect: {heal: 50, mana:56}};

const ClonePositionHolder = {...PositionHolder};
console.log(ClonePositionHolder.effect = power = 70);
console.log(ClonePositionHolder);
ClonePositionHolder.effect.push({power: "heal"}) ;
console.log(PositionHolder);
console.log(ClonePositionHolder);
// ! another Rabit Hole... trying solve this...
// $ i want to access {effect} and change thier property in clone object and i aslo i want to add some other property.