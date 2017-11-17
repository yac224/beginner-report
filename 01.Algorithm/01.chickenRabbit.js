/* 
rabbit, chicken = head - x
=> 4 * rabbit + 2 * (head - rabbit) = foot
=> 2 * rabbit + 2 * head = foot
=> 2 * rabbit = foot - 2 * head
=> rabbit = foot / 2 - head
 
4 * rabbit + 2 * chicken = foot
rabbit + chicken = head
=> 4 * rabbit + 2 * chicken - 2*(rabbit + chicken) = foot - head
=> 4 * rabbit + 2 * chicken - 2 * rabbit - 2 * chicken = foot - head
=> 2 * rabbit ＝ foot - head
=> rabbit = foot / 2 - head
*/

function solution(head, foot) {
  if (foot % 2) return 'fail'
  var rabbit = foot / 2 - head
  var chicken = head - rabbit
  if (rabbit < 0 || chicken < 0) return 'fail'
  return `${chicken} chickens, ${rabbit} rabbits`
}

let start = new Date().getTime()
console.log(solution(10, 30))
console.log(`time used: ${new Date().getTime() - start}ms`)