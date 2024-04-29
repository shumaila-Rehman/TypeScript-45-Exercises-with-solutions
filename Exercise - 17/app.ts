//                 ============> QUESTION # 17 <============
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time 
//for the dinner, and you have space for only two guests.

//* Start with your program from Exercise 16. Add a new line that prints a message saying that 
//you can invite only two people for dinner.

//* Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them know
// you’re sorry you can’t invite them to dinner.

//* Print a message to each of the two people still on your list, letting them know they’re 
//still invited.

//* Remove the last two names from your list, so you have an empty list. Print your list 
//to make sure you actually have an empty list at the end of your program.
  
//            =======> SOLUTION STARTS <=========

//     creating a guset list in array
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

 // ========> question 17 starts now ....

  // print a message to  guests. and make excuse we are unable to invite more guests, but 2 only
// step 1.. 
  console.log("Unfortunately, bigger table can't get on time, so i will invite only two people");

  // step # 2. using while loop for removing guests from list. but 2 will be remain..

  while(gustList.length > 2 ){
    let removeGuest = gustList.pop();
console.log(`Sorry , ${removeGuest} I can't invite you to dinner.`);

  };
  console.log("invitaion to the last two guests");

  //  sending invitation to the last two guests for dinner.

  gustList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner.`));


//     remove all guest from list and make your list empty..


gustList.pop();   ////  pop method will be use for removing from array
gustList.pop();

// checking list empty or not..
console.log("empty list", gustList);

















  











