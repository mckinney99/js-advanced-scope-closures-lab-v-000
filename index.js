function produceDrivingRange(blockrange){
  return function(trip){
    return blockrange < trip
  }
}

const produceDrivingRangeForTen = produceDrivingRange(10)
