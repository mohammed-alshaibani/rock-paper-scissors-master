## Frontend Mentor Challenge Solution- Rock, Paper, Scissors 

## Overview
This project is a Rock, Paper, Scissors game developed using HTML, CSS, and JavaScript. The goal of this game is to test basic web development skills, focusing on interactivity, DOM manipulation, and responsive design. For an additional challenge, the code could be extended to include a Rock, Paper, Scissors, Lizard, Spock version.

## Features
- **Simple UI**: Minimalistic design using Tailwind CSS.
- **User Score Tracking**: User's score increases with each win and is displayed at the top.
- **Game Logic**: Determines the winner based on user and computer choices.
- **Play Again**: After each round, users can play again without refreshing the page.
- **Icons**: Displays icons for user and computer choices.
- **Responsive**: Game layout adjusts for different screen sizes.

## File Structure
- **`index.html`**: Contains the main HTML structure for the game.
- **`style.css`**: Provides the styling for the game, using Tailwind CSS for rapid UI development.
- **`index.js`**: JavaScript file containing the game logic and DOM manipulation.

## How to Play
1. **Choose Your Move**: Select one of the options (Rock, Paper, or Scissors).
2. **See the Result**: The game displays the computer's choice, the result of the round, and updates the score if you win.
3. **Play Again**: Click the "Play Again" button to return to the selection screen and start another round.

## Game Logic
- **Choices**: Three choices are available: Rock, Paper, and Scissors.
- **Random Computer Choice**: The computer randomly selects one of the choices each round.
- **Determine Winner**: Based on the rules:
  - Rock beats Scissors
  - Scissors beats Paper
  - Paper beats Rock
- **Display Results**: The result of each round is displayed, showing both the user's and computer's choices.

## Code Highlights

### JavaScript Functions
- **`playGame(userChoice)`**: Handles the game round, including calling helper functions to determine the computer's choice, the result, and updating the UI.
- **`getRandomChoice()`**: Returns a random choice for the computer.
- **`determineWinner(userChoice, computerChoice)`**: Determines and returns the result based on the user's and computer's choices.
- **`updateResultSection(result, userChoice, computerChoice, score)`**: Updates the result display, showing icons and the current score.

## Technologies Used
- **HTML**: Structure of the game interface.
- **CSS (Tailwind)**: Used for quick styling and responsive design.
- **JavaScript**: Contains the game logic, score tracking, and DOM manipulation.

## Future Enhancements
- **Add Lizard and Spock Options**: Extend the game to include these options.
- **Track Computer Score**: Add score tracking for the computer.
- **Persistent Score**: Store score in `localStorage` to keep it even after refreshing the page.
- **Animations**: Add animations for showing results and transitions.

## Setup
1. **Download or Clone** this repository.
2. **Open `index.html`** in a browser to start playing the game.

Enjoy the game, and challenge yourself to win against the computer!
cd rock-paper-scissors-game
Open the index.html file in your web browser.
