const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findTheShortestWord (arrayOfWords) {
    let shortestWord = arrayOfWords[0];

    for (let word of arrayOfWords){
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }
    
    console.log(shortestWord);
}

findTheShortestWord(danishWords); // returns 'ø'