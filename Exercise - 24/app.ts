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



let x  = "Shumaila Rehman";
let y = "Nadia Rehman";
  
//Tests for equality and inequality with strings
console.log(x == "Shumaila Rehman");

console.log(y!= "Nadia Rehman");

// Tests using the lower case function

let lowerCase = "shumaila";
let newone = lowerCase.toLowerCase();

console.log(lowerCase == "shumaila");
console.log(newone != lowerCase);  

//Numerical tests involving equality and inequality, greater than and less than, greater
// than or equal to, and less than or equal to..

let a = 10;
let b = 20;

console.log(a == 10);
console.log(b != 20);

console.log(a < b);
console.log(a > b);

console.log(a <= 10);
console.log(b >= 20);


// // Tests using "and" and "or" operators

let apple : boolean = true;
let banana : boolean = false;

 if(apple && banana){
    console.log("this is not condition")
 }else{
    console.log("this is and condition")
 }

 console.log(apple || banana);


// Test whether an item is in a array..

let item : string[]=["ali", "hamza","bilal"];
if(Array.isArray(item)){
    console.log("this is an array");

}else{
    console.log("this is not array")
}



