//               ==============> QUESTION # 45 <=============
//  Cars : Write a function that stores information of car in an object. 
// The function should always receive a manufacturer and a model name. It should then accept 
// an arbitary of keyword arguemnet. call the function with the required information and two other name
// value pair, such as a color an optional feature. Print the object that's returned to make sure
// information was stored correctly. 
//define function to create a car object with optional options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //   Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object.
var my_car = create_car("Toyota", "Corolla", "color : Black", "sunroof: True", "year: 2022");
// print  to check ..
console.log(my_car);
