// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let distance = location - 42;
  if (distance<0){
    distance *= -1 ;
  }
  return distance;
}

function calculateVertical(begBlock, endBlock){
  let distance = (endBlock - begBlock) * 264  ;
  if (distance < 0 ){
    distance *= -1;
  }
    return distance;
}

function distanceFromHqInFeet(location){
   let dist =  distanceFromHqInBlocks(location) * 264;
   return dist;
}

function distanceTravelledInFeet(begBlock, endBlock){
  let dist = calculateVertical(begBlock, endBlock);
  return dist;
}

function calculatesFarePrice(start, destination){
  let distance = calculateVertical(start, destination);
  if (distance < 400){
    return 0;
  } else if (distance > 400 && distance < 2000){
      return distance * .02;
  } else if (distance > 2000 && distance < 2500){
      return 25;
  } else if (distance > 2500){
      return "cannot travel that far";
  }
}
