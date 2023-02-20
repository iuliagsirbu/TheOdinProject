const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Converting Arrays to Strings
console.log("~~~Converting Arrays to Strings~~~")
console.log(fruits);
console.log(typeof fruits);
console.log(fruits.toString());
console.log(typeof fruits.toString());
console.log(fruits.join("*"));
console.log(fruits.join("$"));
console.log(typeof fruits.join("#"), "\n\n\n\n");


// Popping and Pushing
console.log("~~~Popping and Pushing~~~")
let fruit = fruits.pop();
console.log(fruit, fruits);

fruits.push("Kiwi");
console.log(fruits);
let length = fruits.push("Berry");
console.log(length, fruits, "\n\n\n\n");


// Shifting Elements
console.log("~~~Shifting Elements~~~");
console.log("\n!!!Shifting!!!");
console.log(fruits);
let shiftedfruit = fruits.shift();
console.log(shiftedfruit, "\n", fruits);

console.log("\n!!!Unshifting!!!");
console.log(fruits);
let unshiftedlength = fruits.unshift("Lemon");
console.log(unshiftedlength, "\n", fruits, "\n\n\n\n");


// Splicing and Slicing Arrays
console.log("~~~Splicing and Slicing Arrays~~~");
console.log(fruits);
fruits.splice(2, 0, "Mango", "Banana");
let splicedfruits = fruits.splice(2,2);
console.log(splicedfruits, fruits);

const otherfruits = fruits.slice(1,3);
console.log(otherfruits, fruits);