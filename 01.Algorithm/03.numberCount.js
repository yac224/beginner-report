function solution(n) {
  if (n < 1) return 'fail'
  let result = 0
  for (let i = 1; i <= n; i++) {
    result += i
  }
  return result
}

function solution2(n) {
  if (n < 1) return 'fail'
  return n * (n + 1) * .5
}

let start = new Date().getTime()
console.log(solution(100))
console.log(`time used: ${new Date().getTime() - start}ms`)