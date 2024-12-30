# Tic Tac Toe

A simple and responsive Tic Tac Toe game built with React.

## Features

- Play Tic Tac Toe against a friend or AI (if you extend the functionality).
- Tracks the score of Player X and Player O.
- Displays the game status (winner or draw).
- Option to reset the game and clear the scores.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive layout.
- **TypeScript**: For type safety.
- **LocalStorage**: To store and persist the score across sessions.

## Components

1. **App**: The main component which manages game state (board, scores, winner, etc.).
2. **Board**: Displays the Tic Tac Toe grid and renders individual squares.
3. **Square**: Represents an individual square on the grid, where players can click to mark their move.
4. **ScoreBoard**: Displays the scores of Player X and Player O, with an option to clear the scores.
5. **Utils**: Contains functions for game logic like `calculateWinner`, `isBoardFull`, and score management.

## How to Play

1. Click on the squares to place your move (X or O).
2. The game alternates turns between Player X and Player O.
3. The first player to get 3 of their marks in a row, column, or diagonal wins the game.
4. If the board is full and no one has won, the game ends in a draw.
5. After the game ends, you can reset the game and clear the scores.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   cd tic-tac-toe

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev