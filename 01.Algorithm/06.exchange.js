const coinTypes = [1, 5, 10, 50, 100, 500, 1000]

function solution(n) {
  var count = 0
  var coins = {}
  if (n <= 0) return coins
  for (var i = coinTypes.length - 1; i >= 0; i--) {
    var coin = coinTypes[i]
    if (n >= coin) {
      coins[coin] = n / coin >> 0
      count += coins[coin]
      n %= coin
    }
  }
  return { count, coins }
}

function solution2(n) {
  var exchangeList = [{ count: 0, coins: {} }],
    i, j, count, coins;
  for (i = 1; i <= n; i++) {
    count = Infinity;
    for (j = 0; j < coinTypes.length; j++) {
      var coin = coinTypes[j]
      if (i - coin >= 0 && exchangeList[i - coin].count + 1 < count) {
        coins = Object.assign({}, exchangeList[i - coin].coins)
        coins[coin] = coins[coin] ? coins[coin] + 1 : 1
        count = exchangeList[i - coin].count + 1
      }
    }
    exchangeList[i] = { count, coins }
  }
  return exchangeList[n];
};

let start = new Date().getTime()
console.log(solution2(99))
console.log(`time used: ${new Date().getTime() - start}ms`)