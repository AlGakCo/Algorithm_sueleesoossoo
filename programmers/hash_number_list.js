function solution(arr) {
  let filteredArr;
  for (let ele of arr) {
    filteredArr = arr.filter(e => ele !== e)
    for (let filteredEle of filteredArr) {
      splitEle = filteredEle.slice(0, ele.length)
      if (splitEle.includes(ele)) {
        return false
      }
    }
  }
  return true   
}
// const startTime = new Date().getTime()
// console.log(solution(['357', '23', '83575', '753', '12345', '785']))
// const endTime = new Date().getTime()
// console.log('1. ', endTime - startTime)

function solution2(arr) {
  // const startTime = performance.now()
  const mapArr = new Set(arr.map(e => e.length))
  let sliceArr
  for (let ele of mapArr) {
      sliceArr = new Set(arr.map(e => {
        if (e.length < ele) return `null${e}`
        return e.slice(0, ele)
      }))
      if (sliceArr.size !== arr.length) {
        return false
      }
  }
  // const endTime = performance.now()
  // console.log('2. ', endTime - startTime)
  return true
}

// console.log(solution2(['357', '23', '83575', '753', '12345', '85']))

const startTime = new Date().getTime()
console.log(solution2(['357', '23', '83575', '753', '12345', '785']))
const endTime = new Date().getTime()
console.log('1. ', endTime - startTime)