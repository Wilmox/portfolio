---
title: 'Tic Tac Toe VS Minimax Algorithm'
type: 'Side project'
description: 'Making an unbeatable Tic-Tac-Toe opponent using the MiniMax decision theory algorithm.'
duration: "3 days"
teamSize: 1
headerImg: '/assets/img/project-tictactoe-minmax.jpg'
slug: 'tic-tac-toe-minimax-ai'
labelText: ['Learning', "AI & Robotics"]
labelColors: ['rgba(243, 156, 18, .7)', '#343A40']
labelIcons: ['📚', '🤖']
---

## A perfect game of Tic Tac Toe
If you play perfectly, every time you play you will either win the game, or you will draw the game. Furthermore if you play against another perfect player, you will always draw the game.
<br/><br/>
There are 3 "end-conditions" in the Tic Tac Toe game:

- You win! You get 10 points, the AI loses 10 points.
- You lose... You lose 10 points, the AI gets 10 points.
- You draw. Nobody gets any points.

## The MiniMax Decision Theory Algorithm

The Minimax algorithm functions based on the logic we just discussed with the point system.
<br/>
The key to the Minimax algorithm is a back and forth between the two players, where the player whose "turn it is" desires to pick the move with the maximum score. In turn, the scores for each of the available moves are determined by the opposing player deciding which of its available moves has the minimum score. And the scores for the opposing players moves are again determined by the turn-taking player trying to maximize its score and so on all the way down the move tree to an end state.

<img src="/assets/img/projects/minimax.png" />

One player will always try to maximize his score, while the other one needs to minimize his score.

## My implementation
I started my implementation with the pseudocode from Wikipedia and turned it into Javascript code.
You can view, clone, fork, ... my full implementation on my [GitHub](https://github.com/Wilmox).

```js
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


(* Initial call *)
minimax(origin, depth, TRUE)
```


## Play it yourself!
_(Works best on a computer or tablet)_ <br/>
Click [HERE](/project/play-tic-tac-toe-minimax-ai) to play in fullscreen. GLHF!

<iframe src="/project/play-tic-tac-toe-minimax-ai" title="Tic Tac Toe VS Minimax Algorithm"></iframe>
