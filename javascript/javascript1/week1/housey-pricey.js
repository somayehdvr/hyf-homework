
//Peter case
let width = 8
let height = 10
let depth = 10
let gardenSizeInM2 = 100
let paid = 2500000

//formulas
let volumeInMeters = depth * height * width;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

//result
console.log(`Peter's house price should be ${housePrice}, and he paid ${paid}`);
if (housePrice>=paid){
    console.log(`Peter should purchase the house`)
}
else{
    console.log(`Peter should not purchase the house`)
}

//Julia case
width = 5
height = 8
depth = 11
gardenSizeInM2 = 70
paid = 1000000

//formulas
volumeInMeters = depth * height * width;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

//result
console.log(`Julia's house price should be ${housePrice}, and she paid ${paid}`);
if (housePrice>=paid){
    console.log(`Julia should purchase the house`)
}
else{
    console.log(`Julia should not purchase the house`)
}