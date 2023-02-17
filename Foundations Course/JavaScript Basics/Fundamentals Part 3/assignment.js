function add7(x) {
    //Write a function called add7 that takes one number and returns that number + 7.
    return x + 7;
}

function multiply(a, b) {
    //Write a function called multiply that takes 2 numbers and returns their product.
    return a * b;
}

function capitalize(string) {
    //Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
    const ascii = "a".charCodeAt(0) - "A".charCodeAt(0);
    if (string[0] >= "a" && string[0] <= "z") {
        string = String.fromCharCode(string[0].charCodeAt(0) - ascii) + string.slice(1);
    }
    let auxstring = "";
    for (let i = 1; i < string.length; i++) {
        if (string[i] >= "A" && string[i] <= "Z") {
            auxstring += String.fromCharCode(string[i].charCodeAt(0) + ascii);
        }
        else{
            auxstring+= string[i];
        }
    }
    string = string[0] + auxstring;
    return string;
}

function lastLetter(string) {
//Write a function called lastLetter that takes a string and returns the very last letter of that string:
    return string[string.length - 1];
}

console.log(add7(8));
console.log(multiply(56,78));
console.log(capitalize("sTrinG"));
console.log(lastLetter("string"));
