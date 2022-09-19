/* 
Phrase Hunter --- Matrix Edition
 * app.js 
*/
const phraseDiv = document.getElementById("phrase").firstElementChild;
const liElements = phraseDiv.getElementsByTagName("li");
const overlay = document.getElementById("overlay");
const hearts = document.querySelectorAll(".tries");
const audio = document.querySelector("audio");
const audiobutton = document.getElementById("audio-button");
let game;

/**
 * Listens for users to click start, and takes away overlay to main phrase hunting keyboard screen.
 */

const startGame = document.getElementById("btn__reset");
startGame.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
  // audio gets triggered
  audio.volume = 0.9;
  audio.play();
  audio.loop = true;
});

/**
 * pause and play button for music.
 */

audiobutton.addEventListener("click", (e) => {
  if (audio.paused) {
    audio.volume = 0.9;
    audio.play();
    audio.loop = true;
  } else {
    audio.pause();
  }
});
/**
 * Listens for users to click on the keyboard to guess what letter and handleInteraction checks which letter clicked.
 */

const keyboardSection = document.getElementById("qwerty");
keyboardSection.addEventListener("click", (e) => {
  if (e.target.className === "key") {
    game.handleInteraction(e.target);
    return true;
  }
});

/**
 * matches key with button if it not already disabled
 * checking for enabled/disabled prevents key from being spammed and running out of lives
 */
const keys = document.querySelectorAll(".key");
document.addEventListener("keydown", (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i].innerHTML && keys[i].disabled === false) {
      game.handleInteraction(keys[i]);
    }
  }
});
