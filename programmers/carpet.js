function solution(brown, yellow) {
  // 2a + 2b = brown + 4
  // brown = 2a + 2b - 4
  // (a-2) * (b-2) = yellow 
  // ab -2b -2a +4 =yellow
  for (let height = 1; height <= brown / 2; height++) {
      for (let width = height; width <= brown / 2; width++) {
          if (((2 * width + 2 * height - 4) === brown) && ((width * height -2*height -2*width + 4) === yellow)) {
              return [width, height]
          }
      }
  }
}

console.log(solution(10, 2))