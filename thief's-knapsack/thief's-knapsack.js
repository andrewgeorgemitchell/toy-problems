const knapsack = (items, maxWeight) => {
  let highestTotal = 0;
  const iterator = (currentValue, currentWeight, start) => {
    for (let i = start; i < items.length; i += 1) {
      const { value, weight } = items[i];
      if (currentWeight + weight <= maxWeight) {
        iterator(currentValue + value, currentWeight + weight, i + 1);
      } else if (currentWeight <= maxWeight) {
        if (highestTotal < currentValue) {
          highestTotal = currentValue;
        }
        return;
      } else {
        return;
      }
    }
  };
  iterator(0, 0, 0);
  return highestTotal;
};

const generateItems = () => {
  const items = [];
  for (let i = 0; i < 50; i += 1) {
    const item = {
      value: Math.round(Math.random() * 100),
      weight: Math.round(Math.random() * 10),
    };
    items.push(item);
  }
  return items;
};

const itemSet1 = generateItems();
const itemSet2 = generateItems();
const itemSet3 = generateItems();

// TODO: Write test cases!
console.log(knapsack(itemSet1, 10));
console.log(knapsack(itemSet2, 15));
console.log(knapsack(itemSet3, 20));
