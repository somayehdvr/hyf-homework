function TimeCalculator(travelInformation){

//  calculate time in seconds    
const timeInSec = ((travelInformation.destinationDistance) / (travelInformation.speed))* 3600;

//  convert to hours, minutes, seconds    
var h = Math.floor(timeInSec / 3600);
var m = Math.floor(timeInSec % 3600 / 60);
//var s = Math.floor(timeInSec % 3600 % 60); for more precise result

var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
//var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : ""; for more precise result

return hDisplay + " and " + mDisplay //+ " and " + sDisplay; for more precise result
}

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
const travelTime = TimeCalculator(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes
