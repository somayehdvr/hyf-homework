// fetch movies json
////////////////////////////////////////////
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(moviesData => {
        const badMovies = moviesData.filter(movie => movie.rating < 4)
        const recentBadMovies = badMovies.filter(movie => movie.year >= 2000)
    })

// Promise that resolves after set time
////////////////////////////////////////////
function returnPromise(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, resolveAfter * 1000);
    });
}
    
returnPromise(8).then(() => {
    console.log("I am timeout resolve"); // logged out after 8 seconds
});
  
// use it with async/await
////////////////////////////////////////////
async function getPromise() {
    try {
        await returnPromise(8)
        console.log("I am called asynchronously"); // logged out after 8 seconds
    } catch(error) {
        throw "async resolve went wrong";
    }
}

getPromise();

// Rewrite time
////////////////////////////////////////////
function setTimeoutPromise(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, resolveAfter);
    });
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});
  
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        function success(position) {
            const longitude = position.coords.longitude
            const latitude = position.coords.latitude
            const userPosition = [longitude, latitude]
            resolve(userPosition);
        }
        function fail(error) {
            reject(error)
        }
        navigator.geolocation.getCurrentPosition(success, fail)
    });
}
  
getCurrentLocation()
.then((userPosition) => {
    // called when the users position is found
    console.log(userPosition);
})
.catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
});

// Fetching and waiting
////////////////////////////////////////////
// using promises
new Promise(resolve => {
    setTimeout(() => {
        fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
        .then(response => response.json())
        .then(moviesData => {
            console.log(moviesData)
        })
        resolve();
    }, 3000);
});
    
//using async/await
async function fetchUsingAsync() {
    try {
        const asyncResponse = await setTimeout(async () => {
            const response = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
            const moviesData = await response.json()
            console.log(moviesData)
        }, 3000);
        return asyncResponse;
    } catch(error) {
        throw "async resolve went wrong";
    }
}

fetchUsingAsync();
