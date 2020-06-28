function solution(heightList) {
  return heightList.map((a, i) => {
    while (i) {
      i--;
      if (heightList[i] > a) {
        return i + 1;
      }
    }
    return 0;
  });
}

console.log(solution([6, 9, 5, 7, 4]));