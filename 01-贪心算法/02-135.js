/**
 *  https://leetcode-cn.com/problems/candy/
 *  
 *  把所有孩子的糖果数初始化为 1, 先从左往右遍历一遍，如果右边孩子的评分比左边的高，
 *  则右边孩子的糖果数更新为左边孩子的糖果数加 1,
 * 
 *  再从右往左遍历一遍，如果左边孩子的评分比右边的高，且左边孩子当前的糖果数不大于右边孩子的糖果数，
 *  则左边孩子的糖果数更新为右边孩子的糖果数加 1
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