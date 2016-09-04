const bubbleSort = require('../src/bubble-sort');
const assert = require('assert');

it('bubble sort', () => {
  assert.deepEqual([1,2,3,4,5], bubbleSort([3,2,5,4,1]));
})