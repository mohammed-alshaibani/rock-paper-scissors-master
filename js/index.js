document.addEventListener("DOMContentLoaded", function () {
  let userScore = 0;

  function playGame(userChoice) {
    const computerChoice = getRandomChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === "You win!") {
      userScore++;
    }

    updateResultSection(result, userChoice, computerChoice, userScore);
    document.getElementById("game-selection").classList.add("hidden");
    document.getElementById("result-section").classList.remove("hidden");
  }

  function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }

  function updateResultSection(result, userChoice, computerChoice, score) {
    const icons = {
      rock: "./../images/icon-rock.svg",
      paper: "./../images/icon-paper.svg",
      scissors: "./../images/icon-scissors.svg",
    };

    // Update the result text and score
    document.getElementById("result-text").textContent = result;
    document.getElementById(
      "score-display"
    ).textContent = `Your score: ${score}`;
    score;
    document.getElementById("score").textContent = `${score}`;

    // Update the icons
    document.getElementById(
      "user-choice-icon"
    ).innerHTML = `<button class="choice" data-choice="${userChoice}">
    <img src="${icons[userChoice]}" alt="${userChoice}"  class="w-16 h-16">
    </button>`;
    document.getElementById(
      "computer-choice-icon"
    ).innerHTML = `<button class="choice" data-choice="${computerChoice}">
    <img src="${icons[computerChoice]}" alt="${computerChoice}" class="w-16 h-16">
    </button>`;
  }

  // Event listener for the "Play Again" button
  document.getElementById("play-again").addEventListener("click", function () {
    document.getElementById("game-selection").classList.remove("hidden");
    document.getElementById("result-section").classList.add("hidden");
  });

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice) => {
    choice.addEventListener("click", function () {
      const userChoice = this.getAttribute("data-choice");
      playGame(userChoice);
    });
  });
});
