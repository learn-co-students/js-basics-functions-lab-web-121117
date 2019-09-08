// Code your solution in this file!
function distanceFromHqInBlocks(block){
  let distance;
  const hq = 42;
  if (block > hq){
    distance = block - hq;
    return distance;
  }else{
    distance = hq - block;
    return distance;
  }
}

function distanceFromHqInFeet(block){
  return 264 * distanceFromHqInBlocks(block)
}

function distanceTravelledInFeet(start, finish){
  if(start > finish){
    return 264 * (start - finish)
  }else{
    return 264 * (finish - start)
  }
}

function calculatesFarePrice(start, destination){
  let price;
  const distance = distanceTravelledInFeet(start, destination)
  if(distance === 264){
    return price = 0
  }
  if(distance > 400 && distance < 2000){
    return price = distance * 0.02
  }else if(distance > 2000 && distance < 2500){
    return price = 25
  }else if(distance > 2500){
    return 'cannot travel that far'
  }
}
