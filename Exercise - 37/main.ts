//      ============> QUESTION # 37 <=========

//   Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(size: string = "large", message: string = "I Love Typescript. "){
console.log(`this is ${size} shirt with printed msg is ${message}`);
}
make_shirt("Medium");
make_shirt("large");
make_shirt("small" , "I don't like small size shirt. tsc")