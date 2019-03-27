const fs = require('fs');

const [itemSet1, itemSet2, itemSet3] = require('./data');

// Backtracking
const knapsackBacktrack = (items, maxWeight) => {
  let highestTotal = 0;
  let bestItems = [];
  const iterator = (currentValue, currentWeight, start, trackingArr) => {
    for (let i = start; i < items.length; i += 1) {
      const { value, weight } = items[i];
      if (currentWeight + weight <= maxWeight) {
        iterator(currentValue + value, currentWeight + weight, i + 1, [...trackingArr, { value, weight, ratio: value / weight }]);
      } else if (currentWeight <= maxWeight) {
        if (highestTotal < currentValue) {
          highestTotal = currentValue;
          bestItems = trackingArr;
        }
        return;
      } else {
        return;
      }
    }
  };
  iterator(0, 0, 0, []);
  return {
    highestTotal,
    bestItems,
  };
};

// Iterative
// const knapsack = (items, maxWeight) => {
//   const newItems = items.map(({ value, weight }) => {
//     const ratio = Math.round(value / weight);
//     return {
//       value,
//       weight,
//       ratio,
//     };
//   });
//   const sortedItems = newItems.sort((a, b) => b.ratio - a.ratio);
//   console.log(sortedItems);
// };

// const generateItems = () => {
//   const items = [];
//   for (let i = 0; i < 50; i += 1) {
//     const item = {
//       value: Math.round(Math.random() * 100),
//       weight: Math.round(Math.random() * 10),
//     };
//     items.push(item);
//   }
//   const newData = [...exampleData, items];
//   fs.writeFile(`${__dirname}/data.json`, JSON.stringify(newData, null, 2), (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File has been created');
//   });
//   return items;
// };

// const itemSet1 = generateItems();
// const itemSet2 = generateItems();
// const itemSet3 = generateItems();

// // TODO: Write test cases!
console.log(knapsackBacktrack(itemSet1, 10));
console.log(knapsack(itemSet1, 10));
console.log(knapsack(itemSet2, 15));
console.log(knapsack(itemSet3, 20));
