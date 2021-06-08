//Find and count the Danish letters
///////////////////////////////////////////////
function findDanishLetters (string) {
    const danishLetters = ["æ", "ø", "å"]
    const count = {total: 0}
    for (const letter of string.split("")) {
        if (danishLetters.includes(letter)) {
            if (!count[letter]) {
                count[letter]= 0
            }
            count.total++
            count[letter]++
        }
    }
    console.log(count)
}

const danishString = "Jeg har en blå bil";
findDanishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}