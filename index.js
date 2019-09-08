// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  return Math.abs(destination - 42);
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet(pickup, destination) {
  return Math.abs((destination - pickup) * 264);
}

function calculatesFarePrice(pickup, destination) {
  let distance = distanceTravelledInFeet(pickup, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance < 2000) {
    return distance * .02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
