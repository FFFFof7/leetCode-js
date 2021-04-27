/**
 *  https://leetcode-cn.com/problems/candy/
 *  贪心策略: 对饼干以及饥饿度进行排序 使得最小饥饿度得到最小可以满足的饼干使得吃饱的人数最大化
 * 
 */
function candy(ratings) {
  const size = ratings.length
  const sugers = new Array(size).fill(1)
  for (let i = 1; i < size; i++) {
    if (ratings[i] > ratings[i - 1]) {
      sugers[i] = sugers[i - 1] + 1;
    }
  }
  for (let i = size - 1; i >= 0; i--) {
    if (ratings[i] < ratings[i - 1]) {
      sugers[i - 1] = Math.max(sugers[i - 1], sugers[i] + 1);
    }
  }
  let sum = 0;
  sugers.forEach(item => sum += item)
  return sum
}
module.exports = candy