//     ===========> QUESTION # 3 <=========
//     ===========> Name Cases <==========
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
//
//                         =======> UPPER CASE <========
var person_name = "shumaila Rehman";
console.log(person_name.toUpperCase());
//                      =========> LOWER CASE <=========
console.log(person_name.toLowerCase());
//                       ===========> TITLE CASE <==========
var first = person_name.charAt(0);
console.log(first.toUpperCase());
var rem = person_name.slice(1);
console.log(rem);
console.log(first + rem);
