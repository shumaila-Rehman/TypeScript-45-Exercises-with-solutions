//                       ===========> QUESTION # 16 <===========
//  
//    More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.

//* Start with your program from Exercise 15. Add a print statement to the end of your
// program informing people that you found a
//bigger dinner table.

//* Add one new guest to the beginning of your array.

//* Add one new guest to the middle of your array.
//* Use append() to add one new guest to the end of your list.
//* Print a new set of invitation messages, one for each person in your list.



//    creating a guset list in array
let gustList: string[]=["ali", "bilal", "aehmad","fakhir"];
//   making variable for a person who is not coming.
let unableToCome = gustList[0];
console.log(unableToCome + "is not coming to dinner. ");


// Add new member at a place of first memeber.
gustList.splice(0 , 1, "kianat");

//    printung a message for new bigger table..
console.log("good news , I found a bigger table for dinner. ");

// adding a new value at a starting index.
gustList.unshift("khurram");

// add a new value at an ending index .
gustList.push("zain");


//   get a middle index of array.
let middleIndex : number = Math.floor(gustList.length/2);
console.log(middleIndex);

// Adding a new guest to middle in dex of array.

gustList.splice(middleIndex , 0, "ayesha");

gustList.forEach(newOne => console.log(`hello ${newOne} , I found a bigger table , that's why i invite to all`))











