//      ===========>    QUESTION # 18   <=============
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//     18. Seeing the World: Think of at least five places in the world you’d like  visit.
//* Store the locations in a array. Make sure the array is not in alphabetical order.
//* Print your array in its original order.
//* Print your array in alphabetical order without modifying the actual list.
//* Show that your array is still in its original order by printing it.
//* Print your array in reverse alphabetical order without changing the order of the original list.
//* Show that your array is still in its original order by printing it again.
//* Reverse the order of your list. Print the array to show that its
//order has changed.
//* Reverse the order of your list again. Print the list to show it’s back to its original order.
//* Sort your array so it’s stored in alphabetical order. Print the array to show that its orde
//r has been changed.
//* Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
//   making an array..
var countryTour = ["China", "Japan", "Norway", "America"];
//  print array name.
console.log("original order: ", countryTour);
// now in alphabatical order.. //     [...string] ===> this is use for copy of variable 
console.log("Alphabetical order:", __spreadArray([], countryTour, true).sort()); // sort method for alphabateical
// now print orinal method
console.log("this is still in original form:", countryTour);
//  reverse order without effecting original one.
console.log("reverse order :", __spreadArray([], countryTour, true).reverse());
//  now check original is still in form..
console.log("this is still in original order:", countryTour);
// now again reverse order but this time original will be changed. don't copy it.
console.log("now orginal will be changed with this method", countryTour.reverse());
// back to original order...
console.log("back to original form again reverse it to convert in original form", countryTour.reverse());
// now alphabetical order but in original form..
console.log("sort alphabetical order of original array", countryTour.sort());
// again change original in reverse order...
console.log("again change its form in reverse form", countryTour.reverse());
