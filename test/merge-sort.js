const mergeSort = require('../src/merge-sort');
const assert = require('assert');

it('merge sort', () => {
  assert.deepEqual([1,2,3,4,5], mergeSort([3,2,5,4,1]));
})