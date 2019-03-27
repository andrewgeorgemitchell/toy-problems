process.stdin.resume();
process.stdin.setEncoding('utf8');

class Board {
  constructor(positions) {
    this.currentPositions = positions.map((value) => {
      if (value) {
        return value;
      }
      return ' ';
    });
    const [one, two, three, four, five, six, seven, eight, nine] = this.currentPositions;
    this.board = `
  ${one} |  ${two}  |  ${three}
---------------
  ${four} |  ${five}  |  ${six}
---------------
  ${seven} |  ${eight}  |  ${nine}
`;
  }

  updateBoard(positionToUpdate, type) {
    this.currentPositions[positionToUpdate - 1] = type;
    const [one, two, three, four, five, six, seven, eight, nine] = this.currentPositions;
    this.board = `
  ${one} |  ${two}  |  ${three}
---------------
  ${four} |  ${five}  |  ${six}
---------------
  ${seven} |  ${eight}  |  ${nine}
`;
  }
}
const board = new Board([null, null, null, null, null, null, null, null, null]);
let xTurn = true;

console.log('Lets Play Tic Tac Toe: Player X goes first');
console.log('Type "help" for directions on how to play');
console.log(board.board);
console.log('Player X its your turn:');

process.stdin.on('data', (command) => {
  const commandStr = command.replace('\n', '');
  if (commandStr === 'help') {
    console.log('On each players turn they will type a number 1 - 9');
    console.log('representing the square they wish to place their next "X" or "O"');
    console.log('Here are the squares and their corresponding numbers');
    console.log(`
    1 |  2  |  3
  ---------------
    4 |  5  |  6
  ---------------
    7 |  8  |  9
  `);
  } else {
    if (xTurn) {
      board.updateBoard(parseInt(command, 10), 'X');
      xTurn = !xTurn;
      console.log(board.board);
    } else {
      board.updateBoard(parseInt(command, 10), 'O');
      xTurn = !xTurn;
      console.log(board.board);
    }
    if (xTurn) {
      console.log('Player O its your turn:');
    } else {
      console.log('Player X its your turn:');
    }
  }
});
