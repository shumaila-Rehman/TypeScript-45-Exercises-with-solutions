//                     ============> QUESTION # 27  <============
//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
//* If the alien is yellow, print a message that the player earned 10 points.
//* If the alien is red, print a message that the player earned 15 points.
//* Write three versions of this program, making sure each message is
// printed for the appropriate color alien.
// 1st version
var alien_color = "green";
if (alien_color === "green") {
    console.log("the player earned 5 points");
}
else if (alien_color === "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color === "red") {
    console.log("the player just earned 15 points");
}
else {
    console.log(" you loss the game");
}
// second version...
var alien_color2 = "yellow";
if (alien_color2 === "yellow") {
    console.log("the player just earned 1o points");
}
else {
    console.log("game is over");
}
//        3rd version...
var alien_color3 = "red";
if (alien_color3 === "red") {
    console.log("the player just earned 15 points");
}
else {
    console.log("game is over");
}
