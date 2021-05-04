const dogYearOfBirth = 2015
const dogYearFuture = 2024
let dogYear = dogYearFuture - dogYearOfBirth
let shouldShowResultInDogYears = true

if (shouldShowResultInDogYears) {
    dogYear *= 7
    console.log("Your dog will be "+dogYear+" dog years old in "+dogYearFuture)
}
else {
    console.log("Your dog will be "+dogYear+" human years old in "+dogYearFuture)
}