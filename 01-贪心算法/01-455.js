/**
 *  https://leetcode-cn.com/problems/assign-cookies/
 *  贪心策略: 对饼干以及饥饿度进行排序 使得最小饥饿度得到最小可以满足的饼干使得吃饱的人数最大化
 * 
 */

function findContentChildren(children, cookies) {
  const sortCookie = cookies.sort()
  const sortChildren = children.sort()
  let cookie = 0
  let child = 0
  while (child < children.length && cookie < cookies.length) {
    if(sortChildren[child] <= sortCookie[cookie]) {
      child++
    }
    cookie++
  }
  return child
};


module.exports = findContentChildren