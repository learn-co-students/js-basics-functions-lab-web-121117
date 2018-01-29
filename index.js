function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street);
}

function distanceFromHqInFeet(street) {
  return 264 * distanceFromHqInBlocks(street);
}

function distanceTravelledInFeet(start, end) {
  return 264 * (Math.abs(start - end));
}

function calculatesFarePrice(start, destination) {
  dist = distanceTravelledInFeet(start, destination);
  if (dist < 400) {
    return 0;
  } else if (dist > 2500) {
    return 'cannot travel that far';
  } else if (dist > 2000) {
    return 25;
  } else if (dist < 2000) {
    return dist * 0.02;
  }
}
