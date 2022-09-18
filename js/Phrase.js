/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // splits random phrase into split 'li' elements per character but hidden.

  addPhraseToDisplay() {
    const phraseArray = this.phrase.split("");
    phraseArray.forEach((letter) => {
      const li = document.createElement("li");
      li.textContent = letter;
      if (letter !== " ") {
        li.className = `hide letter ${letter}`;
      } else {
        li.className = "space";
      }
      phraseDiv.appendChild(li);
    });
  }

/**
* Checks if passed letter is in phrase
*/
  checkLetter(letter) {
    const characters = game.activePhrase.phrase.split("");
    return characters.includes(letter);
  }

/**
* Displays passed letter on screen after a match is found
*/

  showMatchedLetter(letter) {
    for (let i = 0; i < liElements.length; i++) {
      if (liElements[i].textContent === letter) {
        liElements[i].classList.replace("hide", "show");
      }
    }
  }
}
