//                    ===========> QUESTION # 31 <=========

//   31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

//* If the list is empty, print the message We need to find some users!

//* Remove all of the usernames from your array, and make sure the correct message is printed.

let userName =["Aehmad", "Ali","Admin", "Bilal"]; // pehle ye assign karna tha
// us k baad sb se last main variable update kia hay q k empty array b declre karna hay
userName =[];

if(userName.length === 0){
    console.log("The array is empty we need to find some user: ")

}else {
    userName.forEach(user => {
        if (user === "Admin"){
            console.log(`hello ${user}, would you like to see the status report?`)
        } else{ console.log(`hello ${user}, you have successfuly  login in`)

        }
})

};
