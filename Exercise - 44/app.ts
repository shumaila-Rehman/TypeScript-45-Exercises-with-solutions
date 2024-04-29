//         ===============> QUESTION # 44 <=============

// Sandwiches: write a function that accepts an array of items a person want on a sandwich.
// the function should have one parameter that collects as many items as the function call provides
//and it sould print a summary of the sandwich that is being ordered. call the function three times
// using a different number of each arguements each time. 



// define a function with a rest parameter that accept items arguement
// representing our sandwich
function make_sandwich(...items: string[]){
     console.log("Making a sandwich with th following items: ");

     items.forEach(singleItem => console.log(singleItem));
     console.log("Now Enjoy sandwich ");
}
// callm the function 3 times with different arguements,

make_sandwich("chicken","Cheese", "Mayo", "egg");
make_sandwich("Beef","mayo");
make_sandwich("cheese", "mayo","Chicken", "Mattar");