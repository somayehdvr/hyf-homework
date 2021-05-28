const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

const nameToRemove = "Ahmad";

const nameIndex = names.indexOf(nameToRemove);
names.splice(nameIndex, 1);

//delete names[names.indexOf(nameToRemove)];//another way of deleting

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']