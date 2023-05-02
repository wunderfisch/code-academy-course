// get random number
const number = Math.trunc(Math.random() * 157) + 1;
// should be transfered to get an id and from that get data.umsatz
// Score als Variable die angezeigt und reduziert wird
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//
// instead of data.unternehmen hier vorerst die random nummer anzeigen
document.querySelector(".number").textContent = number;
// later: make (.map) new array with only new id, name and value to guess (so no unused ids in between)

// select element + event listener (1. when to act, 2. event handler (function value as argument))
document.querySelector(".check").addEventListener("click", function () {
  // say what function should do: tell value of input
  // put it into variable, make a number from the string
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // if no input yet (guess = 0 = false but Not operator ! makes it true and executes):
  // else if the number is correct/to big/ low display message + minus 1 of score and display new score
  if (!guess) {
    displayMessage("Please input a Number.");
  } else if (guess === number) {
    displayMessage("Richtig geschätzt!");
  } else if (guess !== number) {
    displayMessage(
      guess > number ? "Zu hoch geschätzt" : "Zu niedrig geschätzt"
    );
    score--;
    document.querySelector(".score").textContent = score;

    // put score manualy to 0, because one behind
    document.querySelector(".score").textContent = 0;
  } else {
    displayMessage("Sorry, alle 20 Versuche verbraucht");
    document.querySelector(".score").textContent = 0;
  }
});
