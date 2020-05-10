function solution(clothes) {
  const obj = {}
  for (let e of clothes) {
    if (obj.hasOwnProperty(e[1])) {
      obj[e[1]].push(e[0])
    } else {
      obj[e[1]] = [e[0]]
    }
  }

  const kindsLengthList = []
  Object.keys(obj).forEach(o => {
    kindsLengthList.push(obj[o].length + 1);
  })
  return kindsLengthList.reduce((acc, cur) => acc*cur) - 1
}                                              

// console.log(solution([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]))

function solution2(clothes) {
  const obj = {}
  for (let e of clothes) {
    if (obj.hasOwnProperty(e[1])) {
      obj[e[1]] += 1
    } else {
      obj[e[1]] = 2
    }
  }

  return Object.values(obj).reduce((acc, cur) => acc*cur) - 1
}                     

console.log(solution2([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]))
console.log(solution2([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']]))