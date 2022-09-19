/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("There is no spoon"),
      new Phrase("I can only show you the door"),
      new Phrase("Choice is an illusion"),
      new Phrase(
        "To deny our own impulses is to deny the very thing that makes us human"
      ),
      new Phrase("The body cannot live without the mind"),
    ];
    this.activePhrase = null;
  }

  /*
Selects random phrase from phrases property
@return {Object} Phrase object chosen to be used
*/
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * 4);
    return game.phrases[randomNumber];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user and resets the game.
   */

  startGame() {
    //starts game
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */

  handleInteraction(button) {
    const letter = button.innerText;
    button.disabled = true;
    if (this.activePhrase.checkLetter(letter)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
    console.log(button);
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    const hidden = document.getElementsByClassName("hide");
    if (hidden.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */

  removeLife() {
    this.missed++;
    const heartIndex = hearts.length - this.missed;
    if (this.missed < 5) {
      hearts[heartIndex].firstChild.src = "images/lostHeart.png";
    } else {
      this.gameOver(false);
    }
  }

  /**
   * resets game
   */
  resetGame() {
    this.missed = 0;
    phraseDiv.innerHTML = "";
    console.log(phraseDiv);
    const buttons = keyboardSection.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = "key";
      buttons[i].disabled = false;
    }
    console.log(buttons);
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].firstElementChild.src = "images/liveHeart.png";
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */

  gameOver(win) {
    this.resetGame()
    const message = document.getElementById("game-over-message");
    overlay.style.display = "flex";
    if (win) {
      message.innerHTML = "How did you know that? You must be the one.";
      overlay.className = "win";
      return "win";
    } else {
      message.innerHTML =
        "error: uhh oh./a////fj malfunction//, please try again";
      overlay.className = "lose";
      return "loss";
    }
  }
}
