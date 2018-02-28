function produceDrivingRange(distance){
  return function(trip){
    return distance < trip
  }
}

const
