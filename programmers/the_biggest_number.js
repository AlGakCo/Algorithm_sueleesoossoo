function solution(numbers) {
  const numberStringList = numbers.map(num => num+'')
  const sortedList = numberStringList.sort()
  const returnable = sortedList.sort((a, b) => {
    if (b.length < a.length) {
      return compareNumStr(b, a)
    }
  })
  console.log(returnable)
  return returnable.reverse().join('')
} 

function compareNumStr(a, b) {
  var substring = b.substr(b.length - a.length)
  if (a < substring) {
    if (a.length < substring.length) {
      return compareNumStr(a, substring)
    }
    return 1
  }
  return -1
}

console.log(solution([3, 30, 34, 5, 9]))