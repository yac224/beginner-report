function solution(n) {
  if (n < 1) return 'fail'
  let ary = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      ary.push('FizzBuzz')
    } else if (i % 5 == 0) {
      ary.push('Buzz')
    } else if (i % 3 == 0) {
      ary.push('Fizz')
    } else {
      ary.push(i)
    }
  }
  return ary
}

function solution2(n) {
  if (n < 1) return 'fail'
  let ary = []
  for (let i = 1; i <= n; i++) {
    let result = ''
    if (i % 3 == 0) result += "Fizz"
    if (i % 5 == 0) result += "Buzz"
    ary.push(result ? result : i)
  }
  return ary
}

function solution3(n) {
  if (n < 1) return 'fail'
  let ary = []
  for (let i = 1; i <= n; i++) {
    ary.push(i % 3 ? i % 5 ? i : 'Buzz' : i % 5 ? 'Fizz' : 'FizzBuzz')
  }
  return ary
}

let start = new Date().getTime()
console.log(solution2(100))
console.log(`time used: ${new Date().getTime() - start}ms`)