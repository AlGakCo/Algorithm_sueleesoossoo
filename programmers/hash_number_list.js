function solution(arr) {
  let filteredArr;
  for (let ele of arr) {
    filteredArr = arr.filter(e => ele !== e)
    for (let filteredEle of filteredArr) {
      splitEle = filteredEle.slice(0, ele.length)
      if (splitEle.includes(ele)) {
        return true;
      }
    }
  }
  return false;    
}

console.log(solution(['357', '23', '83575', '753', '12345', '35785']))