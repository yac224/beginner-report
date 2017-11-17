function solution(n) {
  if (n < 0) return 'fail'
  return n <= 1 ? n : solution(n - 2) + solution(n - 1)
}

function solution2(n) {
  if (n < 0) return 'fail'
  var temp = []
  for (let i = 0; i <= n; i++) {
    if (i > 1) {
      temp[i] = temp[i - 1] + temp[i - 2]
    } else {
      temp[i] = i
    }
  }
  return temp[n];
}

function solution3(n) {
  if (n < 0) return 'fail'
  if (n <= 1) return n
  var a = 0,
    b = 1,
    result
  for (let i = 2; i <= n; i++) {
    result = a + b
    a = b
    b = result
  }
  return result
}

let start = new Date().getTime()
console.log(solution(10))
console.log(`time used: ${new Date().getTime() - start}ms`)