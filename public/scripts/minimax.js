/** PSEUDOCODE from https://en.wikipedia.org/wiki/Minimax 
    function minimax(node, depth, maximizingPlayer) is
        if depth = 0 or node is a terminal node then
            return the heuristic value of node
        if maximizingPlayer then
            value := −∞
            for each child of node do
                value := max(value, minimax(child, depth − 1, FALSE))
            return value
        else (* minimizing player *)
            value := +∞
            for each child of node do
                value := min(value, minimax(child, depth − 1, TRUE))
            return value
**/

let scores = {
    X: 10,
    O: -10,
    tie: 0
};

function bestMove() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] == '') {
          board[i][j] = ai;
          let score = minimax(board, 0, false);
          board[i][j] = '';
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    board[move.i][move.j] = ai;
    updateBoard();
    if (!(checkGameEnd())) {
        currentPlayer = human;
      } else {
        console.log("Game over :(")
      }
}

function minimax(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {
        return scores[result];
    }
  
    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = ai;
                    let score = minimax(board, depth + 1, false);
                    board[i][j] = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } 
    else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
            // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = human;
                    let score = minimax(board, depth + 1, true);
                    board[i][j] = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
  }
  