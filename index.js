// Code your solution in this file!

function distanceFromHqInBlocks (number) {
  if (number > 42)
    return number - 42;
  else
    return 42 - number;
}

function distanceFromHqInFeet (number) {
  return distanceFromHqInBlocks (number) * 264;
}

function distanceTravelledInFeet (begBlock, endBlock) {
  return distanceFromHqInFeet(endBlock) - distanceFromHqInFeet(begBlock);
}

function calculatesFarePrice (begBlock, endBlock) {
  const feet = distanceTravelledInFeet(begBlock, endBlock);

  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return feet * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
