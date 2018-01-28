// Code your solution in this file!

function calculatesVertical(x,y) {
  return (x-y)*264
}

function distanceFromHqInBlocks(x) {
  if (x > 42) {
    return x - 42
  }else {
    return 42 - x
  }
}

function distanceFromHqInFeet(x) {
  return distanceFromHqInBlocks(x) * 264
}

function distanceTravelledInFeet(x,y) {
  if (x > y) {
    return (x - y) * 264
  } else {
    return (y-x) * 264
  }
}

function calculatesFarePrice(start, destination) {
  let hold = distanceTravelledInFeet(start, destination)
  if (hold < 400) {
    return 0
  } else if (hold < 2000) {
    return hold * .02
  } else if (hold < 2500) {
    return 25
  }else {
    return "cannot travel that far"
  }
}
