//1
///////////////////////////////////////////////////
setTimeout(() => console.log("Called after 2.5 seconds"), 2500)

//2
///////////////////////////////////////////////////
function logWithDelay (delay, stringToLog){
    setTimeout(() => console.log(stringToLog), delay * 1000)
}

logWithDelay(5, "this string logged after 5 seconds")
logWithDelay(3, "this string logged after 3 seconds")

//3
///////////////////////////////////////////////////
const logButton = document.querySelector('#logButton')
logButton.addEventListener('click', () => logWithDelay(5, "Called after 5 seconds"))

//4
///////////////////////////////////////////////////
const earthLogger = () => {
    console.log('Earth')
}

const saturnLogger = () => {
    console.log('Saturn')
}

function planetLogFunction(planetLogger) {
    planetLogger();
}

planetLogFunction(earthLogger)
planetLogFunction(saturnLogger)

//5
///////////////////////////////////////////////////
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  const logLocation = document.querySelector('#logLocation')
  logLocation.addEventListener('click', geoFindMe);

//7
///////////////////////////////////////////////////
function runAfterDelay(delay, callback){
    setTimeout(() => callback(), delay * 1000)
}

runAfterDelay(7, earthLogger)

//8
///////////////////////////////////////////////////
document.addEventListener('dblclick', () => console.log("double click!"))

//9
///////////////////////////////////////////////////
function jokeCreator(shouldTellFunnyJoke) {

  function logFunnyJoke() {
    const funnyJokes = [
        'What do you call a boomerang that won’t come back?  A stick.',
        'What does a cloud wear under his raincoat?  Thunderwear.',
        'Two pickles fell out of a jar onto the floor. What did one say to the other?  Dill with it.',
        'What time is it when the clock strikes 13?  Time to get a new clock.',
        'How does a cucumber become a pickle?  It goes through a jarring experience.',
        'What did one toilet say to the other?  You look a bit flushed.',
        'What do you think of that new diner on the moon?  Food was good, but there really wasn’t much atmosphere.',
        'Why did the dinosaur cross the road?  Because the chicken wasn’t born yet.',
        'Why can’t Elsa from Frozen have a balloon?  Because she will “let it go, let it go.”',
        'What musical instrument is found in the bathroom?  A tuba toothpaste.'
    ]
    return funnyJokes[Math.floor(Math.random() * funnyJokes.length)]
  }

  function logBadJoke() {
    const badJokes = [
      'Why don’t oysters donate to charity? Because they’re shellfish.',
      'What does a baby computer call its father? Data.',
      'What did the custodian say when he jumped out of the closet? “Supplies!”',
      'Why are colds bad criminals? Because they’re easy to catch.',
      'How does a penguin build its house? Igloos it together.',
      'Which knight invented King Arthur’s Round Table? Sir Cumference.',
      'What do sprinters eat before a race? Nothing. They fast.',
      'What do you call a fly without wings? A walk!',
      'What happens when you witness a ship wreck? You let it sink in.',
      'How can you find Will Smith in the snow? Follow the fresh prints.'
    ]
    return badJokes[Math.floor(Math.random() * badJokes.length)]
  }

  if (shouldTellFunnyJoke) {
    return logFunnyJoke()
  }
  else {
    return logBadJoke()
  }
}

console.log(jokeCreator(0))
console.log(jokeCreator(1))

//Function as a variable
///////////////////////////////////////////////////
const functions = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b]

console.log(functions[0](1, 1))
console.log(functions[1](2, 1))
console.log(functions[2](2, 1))

const constFunction = () => console.log('This is a const Function')
function normalFunction() {
  console.log('This is a normal function')
}

constFunction()
normalFunction()

const objectOfFunction = {
  "functionKey": () => {return 'This is an object of Function'}
}

console.log(objectOfFunction.functionKey())
