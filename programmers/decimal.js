function solution(numbers) {
  const arr = Array.prototype.map.call(numbers, e => e*1)
  console.log(arr, numbers.length)
  let returnable = 0
  arr.forEach(element => {
    if (isPrime(element)) returnable++
  });
  
  console.log(returnable)
  return returnable
}

function isPrime(num) {
 
  for (i = 2; i < num; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

solution("17")