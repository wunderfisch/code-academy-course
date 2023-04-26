/* document.querySelector(".message").textContent = "Richtig geschätzt!";
document.querySelector(".number").textContent = 50;
document.querySelector(".score").textContent = 19;

// user input field
document.querySelector(".guess").value = 23; */

// get random number
const number = Math.trunc(Math.random() * 157) + 1;
// should be transfered to get an id and from that get data.umsatz
// Score als Variable die angezeigt und reduziert wird
let score = 20;
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
    document.querySelector(".message").textContent = "Please input a Number.";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Richtig geschätzt!";
  } else if (guess > number) {
    // only if score is >1 because always one behind clicking/displaying
    if (score > 1) {
      document.querySelector(".message").textContent = "Zu hoch geschätzt";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Sorry, alle 20 Versuche verbraucht";
      // put score manualy to 0, because one behind
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Zu niedrig geschätzt";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Sorry, alle 20 Versuche verbraucht";
      document.querySelector(".score").textContent = 0;
    }
  }
});
