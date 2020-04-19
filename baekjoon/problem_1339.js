function solution(num, ...word) {
  // 알파벳과 가중치를 넣어줄 powObj
  const powObj = {};
  // 가중치에 알맞게 수를 넣어줄 한 자리 자연수 리스트
  const numList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  // 인자로 받은 단어 리스트를 일단 돌린다
  word.forEach(e => {
    // 각 단어를 리스트로 만들어서 또 돌린다
    Array.prototype.forEach.call(e, (s, idx) => {
      // powObj에서 각 단어의 알파벳을 key로 가지고 있는지 체크
      if (!powObj.hasOwnProperty(s)) {
        // 없으면 각 알파벳을 key로 해당 가중치를 넣어준다
        powObj[s] = Math.pow(10, (e.length - 1) - idx)
      } else {
        // 있으면 해당 key 값에 해당 가중치만큼 더 더해준다
        powObj[s] += Math.pow(10, (e.length - 1) - idx)
      }
    })
  }) 
  // powObj의 각 value값을 내림차순으로 소팅
  const sortArr = Object.values(powObj).map(o => o).sort((a, b) => b-a);
  // 소팅한 리스트에 순차적으로 자연수 리스트 값을 곱해준다
  const insertNumSortArr = sortArr.map((ele, i) => ele*numList[i])
  // 모두 더하고 리턴
  return insertNumSortArr.reduce((acc, cur) => acc + cur)
}

const returnable = solution(2, 'AB', 'BA');
console.log('solution', returnable);