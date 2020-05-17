function solution(citations) {
  const obj = {};
  const sortedArr = citations.sort((a, b) => a - b)
  for (let el of sortedArr) {
      if (obj[el]) {
          obj[el].push(el);
      } else {
          obj[el] = [el]
          Object.keys(obj).forEach(e => {
              if (e < el) {
                  obj[e].push(el);
              }
          })
      }
  }
  console.log('obj', obj);
  const arr = [];
  Object.keys(obj).forEach(e => {
      if (obj[e].length >= e) {
          arr.push(e*1);
      }
  })
  console.log('arr', arr);
  return Math.max(...arr)
}

console.log(solution([10, 50, 100]))

function corrected_solution(citations) {
  // h번 이상 인용된 논문의 개수가 h개 이상
  const arr = citations.sort((a,b) => a - b);
  let result = [];
  for(let i = 0; i < arr.length; i++) {
     result.push(Math.min(arr[i] , arr.length - i ));
  }
  return Math.max(...result);
}