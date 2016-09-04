const mergeSortRecursive = arr => {
  const middle = Math.floor(arr.length/2);
  
  if (middle === 0) {
    return arr;
  }
  
  return merge(mergeSortRecursive(arr.slice(0, middle)), mergeSortRecursive(arr.slice(middle)));
}

const mergeSort = arr => {
  let arrays = arr.map(i => [i]);
  
  while(arrays.length > 1) {
    const merged = [];
    for (let i = 0; i<arrays.length; i+=2) {
      merged.push(merge(arrays[i], arrays[i+1] || []));
    }
    
    arrays = merged;
  }
  
  return arrays[0];
};

const merge = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return [...arr1, ...arr2];
  }
  
  if (arr1[0] <= arr2[0]) {
    return [arr1[0], ...merge(arr1.slice(1), arr2)];
  }
  
  return merge(arr2, arr1);
}

module.exports = mergeSortRecursive;