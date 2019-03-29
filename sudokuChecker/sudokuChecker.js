// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

// Input: A String representing the board. 
// Output: 'solved' if the board is valid, 'invalid' if it isn't

// Example input: 

const checkRows = (rowsArr) => {
  let checkerArr = [];
  for (let i = 0; i < rowsArr.length; i++) {
    for (let b = 0; b < rowsArr[i].length; b++) {
      const index = parseInt(rowsArr[i][b] - 1)
      if (checkerArr[index] === undefined) {
        checkerArr[index] = 0;
      }
      checkerArr[index] += 1;
    }
    if (!checkerArr.every(value => value === checkerArr[0])) {
      return false;
    }
  }
  return checkerArr;
}

const checkCols = (rowsArr) => {
  let checkerArr = [];
  for (let i = 0; i < rowsArr.length; i++) {
    for (let b = 0; b < rowsArr[i].length; b++) {
      const index = parseInt(rowsArr[b][i] - 1)
      if (checkerArr[index] === undefined) {
        checkerArr[index] = 0;
      }
      checkerArr[index] += 1;
    }
    if (!checkerArr.every(value => value === checkerArr[0])) {
      return false;
    }
  }
  return checkerArr;
}



const checkSubsquares = (rowsArr) => {
  let checkerArr = [];
  const rightBound = 0;
  const bottomBound = 0;
  for (let c = 0; c < 9; c++) {
    if (c !== 0) {
      if (rightBound ) {
        
      }
    }
    for (let i = 0; i < rightBound; i++) {
      for (let b = 0; b < bottomBound; b++) {
        const index = parseInt(rowsArr[b][i] - 1)
        if (checkerArr[index] === undefined) {
          checkerArr[index] = 0;
        }
        checkerArr[index] += 1;
      }
      if (!checkerArr.every(value => value === checkerArr[0])) {
        return 'invalid';
      }
    }
    
  }
  return checkerArr;
}


function sudokuChecker(board) {
  const rowsArr = board.split('\n');

  const rowsCheckerArr = checkRows(rowsArr);
  if (rowsCheckerArr === false) {
    return 'invalid';
  }
  if (!rowsCheckerArr.every(value => value === rowsCheckerArr[0])) {
    return 'invalid';
  }

  const colCheckerArr = checkCols(rowsArr);
  if (colCheckerArr === false) {
    return 'invalid';
  }
  if (!colCheckerArr.every(value => value === colCheckerArr[0])) {
    return 'invalid';
  }


  return 'solved';
}

const boardStr = `735814296\n\
896275314\n\
214963857\n\
589427163\n\
362189745\n\
471356982\n\
923541678\n\
648792531\n\
157638429`

const boardStrInvalid = `735714296\n\
896275314\n\
314963857\n\
589427163\n\
362189745\n\
471356982\n\
923541678\n\
648792531\n\
157638429`

// Valid
console.log(sudokuChecker(boardStr));

// Invalid
console.log(sudokuChecker(boardStrInvalid));