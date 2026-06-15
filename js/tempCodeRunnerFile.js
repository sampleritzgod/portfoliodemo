const PositionHolder = {name: "Dark_Health", effect: {heal: 50, mana:56}};

const ClonePositionHolder = {...PositionHolder};
console.log(ClonePositionHolder.effect = power = 70);
console.log(ClonePositionHolder);