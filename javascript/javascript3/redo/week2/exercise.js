/*
const TIME = 5000;
const doAsync = true

async function asyncWork (txt) {
  return new Promise(resolve => setTimeout(() => resolve(txt), TIME))
}

function syncWork() {
  var startTime = Date.now();
  while ((Date.now() - startTime) < TIME) { 
  }
}

document.querySelector("button").addEventListener("click", async function () {
    console.log("clicked")
    if (doAsync) {
      await asyncWork();
    } else {
      syncWork()
    }
    console.log("done")
});


//exercise 1
/////////////////////////////////////

async function yesno() {
    return new Promise((resolve) => setTimeout(() => {
        fetch('https://yesno.wtf/api')
            .then(answer => resolve(answer))
    }

        , 1000)
    )
}

yesno()

async function yesno() {
    fetch('https://yesno.wtf/api')
        .then(answer => { return (answer); })
        .catch(error => {
            reject(error)
        });
}

yesno();


//exercise 3
/////////////////////////////////////
const myPro = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (0) {
            resolve("hello")
        }
        else {
            reject("error has occured")
        }
    }, 4000)
})
    .then(result => console.log(result))
    .catch(error => console.error(error))


//exercise 4
/////////////////////////////////////
// YesNoFail4Seconds should wait 4 seconds before it does one of the following 3 things:
const yesNoArray = ['yes', 'no', 0]
const random = () => yesNoArray[Math.floor(Math.random() * yesNoArray.length)];

function YesNoFail4Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (random()) {
                resolve(random());
            } else {
                reject('false');
            }
        }, 1000)
    })
        .then(result => { console.log(result) })
        .catch(error => console.error(error))
}

YesNoFail4Seconds()
*/

//exercise 5
/////////////////////////////////////
// 1 Fetch the astronauts
let urlToFetch = "http://api.open-notify.org/astros.json"
async function getAstronauts() {
    try {
        const astronautsResponse = await fetch(urlToFetch);
        const astronauts = await astronautsResponse.json();
        return astronauts
    } catch(error) {
        throw "Fetchin the astronauts went wrong";
    }
}

getAstronauts();

// 2 After the astronauts has been fetched, fetch movies using this api
urlToFetch = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
async function getMovies() {
    try {
        const moviesResponse = await fetch(urlToFetch);
        const movies = await moviesResponse.json();
        return movies
    } catch(error) {
        throw "Fetchin the movies went wrong";
    }
}

const moviesFetch = getMovies();

// 3 Log out the movies
// moviesFetch.forEach(movie => {
//     console.log(movie[0].title)
// });

//exercise 6
/////////////////////////////////////
