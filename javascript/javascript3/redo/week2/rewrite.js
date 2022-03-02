//setTimeoutPromise
//////////////////////////////////////////
function setTimeoutPromise(timeRange) {
    return new Promise(resolve => setTimeout(() => { resolve() }, timeRange))
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

//getCurrentLocation
//////////////////////////////////////////
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
          
            function success(position) {
              const latitude  = position.coords.latitude;
              const longitude = position.coords.longitude;
                resolve([{ latitude: latitude, longitude: longitude }])
            }
          
            function fail() {
              reject('not successful')
            }
          
            if(!navigator.geolocation) {
              reject('Geolocation is not supported by your browser')
            } else {
                navigator.geolocation.getCurrentPosition(success, fail)
            }
          
          }
        )
}

getCurrentLocation()
.then((position) => {
    // called when the users position is found
    console.log(position);
})
.catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
});