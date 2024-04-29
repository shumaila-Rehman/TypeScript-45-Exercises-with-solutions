//               ================> QUESTION 41 <=============
//41. Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in

function magician_show(magician:string[]){
magician.forEach(onemagician => console.log(onemagician));

}
let magician_names =["John", "Micky", "Peter"]
magician_show(magician_names);