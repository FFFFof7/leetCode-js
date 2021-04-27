/**
 * 
 * https://leetcode-cn.com/problems/non-overlapping-intervals/
 * 贪心策略: 对所有区间 按照起点排序 选择结尾最短的
 */
function eraseOverlapIntervals(intervals) {
  const sortInterVals = intervals.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1
    } else {
      return -1
    }
  })
  let total = 0;
  let prev = intervals[0][1]
  for (let i = 1; i < sortInterVals.length; i++) {
    if(intervals[i][0] < prev) {
      total++
    }else{
      prev = intervals[i][1]
    }
  }
  return total
};
module.exports = eraseOverlapIntervals