/*
1hr = 3600sec
1min = 60sec
*/

function solution(n) {
  if (n < 0) return 'fail'
  var s = n % 60
  var m = Math.floor(n % 3600 / 60)
  var h = Math.floor(n / 3600)
  return `${h}h${m}m${s}s`
}

let start = new Date().getTime()
console.log(solution(10000))
console.log(`time used: ${new Date().getTime() - start}ms`)