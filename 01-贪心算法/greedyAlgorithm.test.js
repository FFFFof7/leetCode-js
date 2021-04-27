const findContentChildren = require('./01-455');
const candy = require('./02-135');
test('455', () => {
  expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
  expect(findContentChildren([1,2], [1,2,3])).toBe(2)
})

test('135', () => {
  expect(candy([1,0,2])).toBe(5)
  expect(candy([1,2,2])).toBe(4)
})
