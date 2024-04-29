//               ==============> QUESTION # 45 <=============

//  Cars : Write a function that stores information of car in an object. 
// The function should always receive a manufacturer and a model name. It should then accept 
// an arbitary of keyword arguemnet. call the function with the required information and two other name
// value pair, such as a color an optional feature. Print the object that's returned to make sure
// information was stored correctly. 



//define function to create a car object with optional options...
function create_car(manufacturer, model, ...options){          // rest parameter statrs from 3 dots..
  
    // initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    //   Add additional options to the car object
    options.forEach(option =>{
        let [key , value ]= option.split(":");
        car[key.trim()] = value.trim();
    } );
    return car;
}
// call the function to create a car object.
let my_car = create_car("Toyota", "Corolla", "color : Black", "sunroof: True", "year: 2022");


// print  to check ..
console.log(my_car)









