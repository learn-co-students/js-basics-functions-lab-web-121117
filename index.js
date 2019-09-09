// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hq = 42;
  const dist = Math.abs(block - hq);
  return dist;
};

function distanceFromHqInFeet(block) {
  distanceFromHqInBlocks(block);
  fpb = 264;
  return distanceFromHqInBlocks(block) * fpb;
};

function distanceTravelledInFeet(start, destination) {
  const fpb = 264;
  const dist = Math.abs(destination - start);
  return dist * fpb;
};

function calculatesFarePrice(start, destination) {
  let dist = distanceTravelledInFeet(start, destination);
  let price = 0;
  const setPrice = 2500;
  if (dist <= 400) {
    price = 0;
    return price;
  } else if (dist <= 2000) {
    price = dist * 2 / 100;
    return price;
  } else if (dist <= 2500) {
    price = setPrice/100;
    return price;
  } else {
    return 'cannot travel that far';
  }
};


// * The first four hundred feet are free.
// * For a distance between 400 and 2000 feet, the price is 2 cents per foot.
// * Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
// * Finally Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far'.
