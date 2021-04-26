const findContentChildren = require('./01-455');
test('455', () => {
  expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
  expect(findContentChildren([1,2], [1,2,3])).toBe(2)
})
