//                       =========> QUESTION # 15 <=========
//   Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.
//* Start with your program from Exercise 14. Add a print statement at the
//end of your program stating the name of the guest who can’t make it.
//* Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.
//* Print a second set of invitation messages, one for each person who is still
//in your list.
var guestList = ["aehmad", "bilal", "areeba", "muskan"];
var unableToCome = guestList[0];
console.log("".concat(unableToCome, " , is not coming for dinner "));
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("hello ".concat(guest, ", I would like to invite to for dinner ")); });
