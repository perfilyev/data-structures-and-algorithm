const bubbleSort = arr => {
  for (let fixed = 0; fixed < arr.length; fixed++) {
    for (let current = 0, next = 1; current < arr.length - fixed; current++, next++) {
      if (arr[current] > arr[next]) {
        [arr[next], arr[current]] = [arr[current], arr[next]];
      }
    }
  }
  
  return arr;
}

module.exports = bubbleSort;