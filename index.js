// Code your solution in this file!

 function distanceFromHqInBlocks(location) {
  if (location > 42) {
    return location - 42;
   } else {
     return 42 - location;
  }
}

function distanceFromHqInFeet(location){
   return distanceFromHqInBlocks(location) * 264;
 }

function distanceTravelledInFeet(pickupLocation, dropoffLocation){
  return distanceFromHqInFeet(dropoffLocation) - distanceFromHqInFeet(pickupLocation);
}

function calculatesFarePrice
 let feet = distanceTravelledInFeet(pickupLocation, dropoffLocation);

 if (feet <= 400 ) {
   return 0;
 } else if (feet > 400 && feet <= 2000 )  {
   return feet * 0.02;
 } else if (feet > 2000 && feet < 2500 ) {
   return 25;
 } else {
   return 'cannot travel that far';
 }
}
