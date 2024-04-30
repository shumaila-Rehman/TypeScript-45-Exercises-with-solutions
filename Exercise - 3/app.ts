//     ===========> QUESTION # 3 <=========
//     ===========> Name Cases <==========
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
//





//                         =======> UPPER CASE <========

let person_name = "shumaila Rehman";
console.log(person_name.toUpperCase());


//                      =========> LOWER CASE <=========
console.log(person_name.toLowerCase());



//                       ===========> TITLE CASE <==========
let myName: string = "shumaila rehman";
let words :string []= myName.split(" ");
let titleCase = " ";
for(let word of words){

    titleCase += word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()
}


console.log(titleCase);

// another way..

//                          regit (fix letters)
console.log(myName.replace(/\bw/g,c =>c.toUpperCase()));


