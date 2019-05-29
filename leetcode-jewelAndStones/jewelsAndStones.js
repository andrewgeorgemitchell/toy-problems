// input: J = "aA" string of length n, S = "aAAbbbb" string of length n
// outut: 3 integer of number of letters that match from J to S
// constraits: none
// edge cases: case sensitive a != A

const jewelsAndStones = (jewels, stones) => {
  let totalJewels = 0;
  for (let i = 0; i < stones.length; i += 1) {
    const currentStone = stones[i];
    for (let j = 0; j < jewels.length; j += 1) {
      const currentJewel = jewels[j];
      if (currentStone === currentJewel) {
        totalJewels += 1;
      }
    }
  }
  return totalJewels;
};

console.log(jewelsAndStones('aA', 'aAAbbbb') === 3);
