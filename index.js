function produceDrivingRange(blockrange){
  return function(trip){
    [num, th] = blockString.split("th")
    if (trip > blockrange) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

const produceDrivingRangeForTen = produceDrivingRange(10)
