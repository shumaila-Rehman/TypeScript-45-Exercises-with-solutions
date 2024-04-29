//                     =============> QUESTION # 43 <============

// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.



function show_magicians(Magicians: string[]){
Magicians.forEach(name => console.log(name));
}

function make_great(Magicians: string[]){
    return Magicians.map(name => `The great ${name}`)
}


let Magicians_name = ["ali", "Bilal", "Umer"];


// making a copy of original array through slice function.
let copy_magician_name = Magicians_name.slice()

// modify the copied array to include "the great"  with their names. 
let copy_great_magician= make_great(copy_magician_name);

// show both function copied and original 

// original
console.log("\t\nOriginal array\t\n")
show_magicians(Magicians_name);
 // copied 
 console.log("\t\nCopy of array\t\n")
 show_magicians(copy_great_magician);

