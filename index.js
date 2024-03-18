// write a program to guess a number , if user enter greater/lesser number then notify user
const prompt = require("prompt-sync")();
console.log("\nGUESS THE NUMBER GAME");
console.log("\nENTER ZERO TO END");

let find = 50;

function guess() {
  let num = prompt("ENTER ANY POSITIVE NUMBER: ");
  num = Number.parseInt(num);
  if (num == find) {
    console.log("HURAAY YOU GUSSED THE CORRECT NUMBER");
  } else if (num > find) {
    console.log("YOU'VE GUESSED A NUMBER GREATER THAN  NEEDED ");
    return guess();
  } else if (num < find && num>0) {
    console.log("YOU'VE GUESSED A NUMBER LESSER THAN NEEDED");
    return guess();
  } else {
    console.log("OKAY BA BYE SEE YOU SOON")
  }
}
guess();
