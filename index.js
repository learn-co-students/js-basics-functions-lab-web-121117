
 function distanceFromHqInBlocks (pickupLocation) {
   if (pickupLocation > 42) {
     return pickupLocation - 42;
   } else {
     return 42 - pickupLocation;
   }
 }
 
 function distanceFromHqInFeet(pickupLocation){
   return distanceFromHqInBlocks(pickupLocation) * 264;
 }
 
 function distanceTravelledInFeet(pickupLocation, dropoffLocation){
   return distanceFromHqInFeet(dropoffLocation) - distanceFromHqInFeet(pickupLocation);
 }
 
 function calculatesFarePrice (pickupLocation, dropoffLocation) {
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
