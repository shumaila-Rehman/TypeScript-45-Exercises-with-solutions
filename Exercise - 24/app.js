//                       ===========> QUESTION # 24 <==========
//       More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True 
//and one False result for each of the following:
//* Tests for equality and inequality with strings
//* Tests using the lower case function
//* Numerical tests involving equality and inequality, greater than and less than, greater
// than or equal to, and less than or equal to
//* Tests using "and" and "or" operators
//* Test whether an item is in a array
//* Test whether an item is not in a array\
var x = "Shumaila Rehman";
var y = "Nadia Rehman";
//Tests for equality and inequality with strings
console.log(x == "Shumaila Rehman");
console.log(y != "Nadia Rehman");
// Tests using the lower case function
var lowerCase = "shumaila";
var newone = lowerCase.toLowerCase();
console.log(lowerCase == "shumaila");
console.log(newone != lowerCase);
//Numerical tests involving equality and inequality, greater than and less than, greater
// than or equal to, and less than or equal to..
var a = 10;
var b = 20;
console.log(a == 10);
console.log(b != 20);
console.log(a < b);
console.log(a > b);
console.log(a <= 10);
console.log(b >= 20);
// // Tests using "and" and "or" operators
var apple = true;
var banana = false;
if (apple && banana) {
    console.log("this is not condition");
}
else {
    console.log("this is and condition");
}
console.log(apple || banana);
// Test whether an item is in a array..
var item = ["ali", "hamza", "bilal"];
if (Array.isArray(item)) {
    console.log("this is an array");
}
else {
    console.log("this is not array");
}
