// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Get references to HTML elements
const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field for user guesses
const guessSlot = document.querySelector('.guesses'); // Area to display previous guesses
const remaining = document.querySelector('.lastResult'); // Remaining attempts display
const lowOrHi = document.querySelector('.lowOrHi'); // Message for "Too high" or "Too low"
const startOver = document.querySelector('.resultParas'); // Container for the "New Game" button

// Create a paragraph element for "New Game" button
const p = document.createElement('p');

// Keep track of previous guesses
let prevGuess = [];
let numGuess = 1; // Number of attempts

let playGame = true; // Game state (true = playing, false = stopped)

// If the game is active, listen for a click on the submit button
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    const guess = parseInt(userInput.value); // Get the user's guess and convert it to a number
    console.log(guess); // Print the guess in the console (for debugging)
    validateGuess(guess); // Check if the guess is valid
  });
}

// Function to validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    // Check if input is not a number
    alert('Please enter a valid number');
  } else if (guess < 1) {
    // Check if number is less than 1
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    // Check if number is greater than 100
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess); // Add guess to previous guesses array

    if (numGuess === 11) {
      // Check if the player used all 10 attempts
      displayGuess(guess); // Show the last guess
      displayMessage(`Game Over. Random number was ${randomNumber}`); // Show game over message
      endGame(); // Stop the game
    } else {
      displayGuess(guess); // Show the guess in the UI
      checkGuess(guess); // Check if the guess is correct
    }
  }
}

// Function to check if the guess is correct or not
function checkGuess(guess) {
  if (guess === randomNumber) {
    // If user guessed correctly
    displayMessage(`You guessed it right`);
    endGame(); // Stop the game
  } else if (guess < randomNumber) {
    // If guess is too low
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    // If guess is too high
    displayMessage(`Number is TOO high`);
  }
}

// Function to update the displayed guesses and remaining attempts
function displayGuess(guess) {
  userInput.value = ''; // Clear input field
  guessSlot.innerHTML += `${guess}, `; // Add guess to previous guesses display
  numGuess++; // Increase the number of attempts
  remaining.innerHTML = `${11 - numGuess} `; // Update remaining attempts
}

// Function to display messages (Too High, Too Low, Correct)
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`; // Show the message inside <h2> tag
}

// Function to end the game
function endGame() {
  userInput.value = ''; // Clear input field
  userInput.setAttribute('disabled', ''); // Disable the input field
  p.classList.add('button'); // Add CSS class to the paragraph
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // Create "Start New Game" button
  startOver.appendChild(p); // Add the button to the page
  playGame = false; // Set game state to false (stopped)
  newGame(); // Call function to set up a new game
}

// Function to reset the game when "Start New Game" button is clicked
function newGame() {
  const newGameButton = document.querySelector('#newGame'); // Get the new game button
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
    prevGuess = []; // Reset previous guesses
    numGuess = 1; // Reset number of attempts
    guessSlot.innerHTML = ''; // Clear previous guesses display
    remaining.innerHTML = `${11 - numGuess} `; // Reset remaining attempts display
    userInput.removeAttribute('disabled'); // Enable input field
    startOver.removeChild(p); // Remove the "New Game" button
    playGame = true; // Set game state to true (active)
  });
}
