/**
 * https://leetcode-cn.com/problems/can-place-flowers/
 * 贪心策略 能种就中 
 * 在数组前后分别添加一个0  使得不用处理边界条件
 */
function canPlaceFlowers(flowerbed, n) {
  flowerbed.unshift(0)
  flowerbed.push(0)
  let can = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      can++
      flowerbed[i] = 1
    }
    if (can === n) {
      break;
    }
  }
  return can === n
}
module.exports = canPlaceFlowers