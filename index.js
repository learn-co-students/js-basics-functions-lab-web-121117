// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
  const traveled = distanceTravelledInFeet(start, destination)
  if (traveled < 400) {
    return 0
  } else if (traveled < 2000) {
    return traveled * 0.02
  } else if (traveled < 2500) {
    return 25
  } else if (traveled > 2500) {
    return 'cannot travel that far'
  }

}
