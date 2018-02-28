function produceDrivingRange(blockrange){
  return function(trip){
    return trip > blockrange
  }
}

const produceDrivingRangeForTen = produceDrivingRange(10)
