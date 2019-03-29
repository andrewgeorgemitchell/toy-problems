/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2

*/

const coins = [
  1,
  2,
  5,
  10,
  20,
  50,
  100,
  200,
];

var makeChange = function(total) {
  let permutations = 0;
  const iterator = (currentTotal, start) => {
    if (currentTotal === total) {
      permutations += 1;
      return
    } else {
      for (let i = start; i < coins.length; i++) {
        const coin = coins[i];
        if (coin + currentTotal <= total) {
          iterator(currentTotal + coin, i)
        }
      }
    }
  }
  iterator(0, 0);
  return permutations;
};


console.log(makeChange(1))
console.log(makeChange(2))
console.log(makeChange(3))
console.log(makeChange(4))
console.log(makeChange(5))
console.log(makeChange(6))
console.log(makeChange(7))
console.log(makeChange(15))
console.log(makeChange(25))
console.log(makeChange(50))
console.log(makeChange(75))
console.log(makeChange(150))
console.log(makeChange(200))