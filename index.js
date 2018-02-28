function produceDrivingRange(blockrange){
  return function(trip){
    return distance < trip
  }
}

const produceDrivingRangeForTen = produceDrivingRange(10)
