function calculateTime(travelInformation){

//  calculate time in seconds    
const timeInSeconds = ((travelInformation.destinationDistance) / (travelInformation.speed))* 3600;

//  convert to hours, minutes, seconds    
let hours = Math.floor(timeInSeconds / 3600);
let minutes = Math.floor(timeInSeconds % 3600 / 60);
//let s = Math.floor(timeInSeconds % 3600 % 60); for more precise result

let formattedHours = "";
if(hours > 0) {
  const hoursWord = hours > 1 ? "hours" : "hour";
  formattedHours = `${hours} ${hoursWord}`;
}

let formattedMinutes = "";
if(minutes > 0) {
  const minutesWord = minutes > 1 ? "minutes" : "minute";
  formattedMinutes = `${minutes} ${minutesWord}`;
}

return hDisplay + " and " + mDisplay //+ " and " + sDisplay; for more precise result
}

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes
