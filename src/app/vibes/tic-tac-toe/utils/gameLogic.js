/**
 * Calculates the winner of the game.
 * @param {Array} squares - Current board state.
 * @returns {Object|null} - Winner 'X' or 'O', and the winning line.
 */
export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}

/**
 * Minimax algorithm to determine the best move for the computer.
 * Assumes Computer is 'O' and Human is 'X'.
 */
function getBestMove(squares, player = 'O') {
  const opponent = player === 'O' ? 'X' : 'O';
  
  // Check terminal states
  const winInfo = calculateWinner(squares);
  if (winInfo) {
    return winInfo.winner === 'O' ? { score: 10 } : { score: -10 };
  }
  if (!squares.includes(null)) {
    return { score: 0 };
  }

  const moves = [];

  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      const move = {};
      move.index = i;
      const newSquares = [...squares];
      newSquares[i] = player;

      const result = getBestMove(newSquares, opponent);
      move.score = result.score;
      moves.push(move);
    }
  }

  let bestMove;
  if (player === 'O') {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = moves[i];
      }
    }
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = moves[i];
      }
    }
  }

  return bestMove;
}

/**
 * Get random available move.
 */
function getRandomMove(squares) {
  const availableMoves = [];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      availableMoves.push(i);
    }
  }
  if (availableMoves.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return { index: availableMoves[randomIndex] };
}

/**
 * Get computer move based on difficulty.
 */
export function getComputerMove(squares, difficulty = 'Hard') {
  if (difficulty === 'Easy') {
    return getRandomMove(squares);
  } else if (difficulty === 'Medium') {
    // 60% chance of playing optimally, 40% random
    const rand = Math.random();
    if (rand > 0.6) {
      return getRandomMove(squares);
    } else {
      return getBestMove(squares, 'O');
    }
  } else {
    // Hard
    return getBestMove(squares, 'O');
  }
}
