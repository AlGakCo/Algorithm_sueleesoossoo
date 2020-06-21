function solution(n, lost, reserve) {
  let returnable = n - lost.length

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      returnable++
      reserve.splice(reserve.indexOf(lost[i]),1);
      continue
    }
    if (reserve.includes(lost[i]-1)) {
      returnable++
      reserve.splice(reserve.indexOf(lost[i]-1),1);
      continue
    }
    if (reserve.includes(lost[i]+1)) {
      returnable++
      reserve.splice(reserve.indexOf(lost[i]+1),1);
      continue
    }
  }
  return returnable;
}

solution(5, [2, 4], [1, 3, 5])