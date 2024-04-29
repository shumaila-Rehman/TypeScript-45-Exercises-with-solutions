"use strict";
//            ==========> QUESTION # 29 <=========
//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
//* Make a array of your three favorite fruits and call it favorite_fruits.
//* Write five if statements. Each should check whether a certain kind of
// fruit is in your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!
9;
//  Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["orange", "pineapple", "kiwi"];
//  Write five if statements. Each should check whether a certain kind of
// fruit is in your array...
if (favorite_fruits.includes("kiwi")) {
    console.log("i really like kiwi");
}
if (favorite_fruits.includes("apple")) {
    console.log("i really like apple");
}
if (favorite_fruits.includes("orange")) {
    console.log("i really like orange");
}
if (favorite_fruits.includes("pineapple")) {
    console.log("i really like pineapple");
}
if (favorite_fruits.includes("banana")) {
    console.log("i really like banana");
}
