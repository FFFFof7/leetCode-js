const findContentChildren = require('./01-455');
const candy = require('./02-135');
const eraseOverlapIntervals = require('./03-435');

test('455', () => {
  expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
  expect(findContentChildren([1,2], [1,2,3])).toBe(2)
})

test('135', () => {
  expect(candy([1,0,2])).toBe(5)
  expect(candy([1,2,2])).toBe(4)
})

test('435', () => {
  expect(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ])).toBe(1)
  expect(eraseOverlapIntervals([ [1,2], [1,2], [1,2] ])).toBe(2)
  expect(eraseOverlapIntervals([ [1,2], [2,3] ])).toBe(0)
})
