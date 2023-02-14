//The postfix and prefix forms
let a = 1, b = 1;
let c = ++a; // c = 2
let d = b++; // d = 1
             // a = 2, b = 2

//Assignment result
let A = 2;
let x = 1 + (A*=2);
            // x = 1 + 2*2 = 1 + 4 = 5;   A = 4

//Type conversions
"" + 1 + 0      // "10"
"" - 1 + 0      // 0 - 1 + 0 = -1
true + false    // 1 + 0 = 1
6 / "3"         // 6/3 = 2
"2" * "3"       // 2*3 = 6
4 + 5 + "px"    // "9px"
"$" + 4 + 5     // "$45"
"4" - 2         // 4 - 2 = 2
"4px" - 2       // NaN
"  -9  " + 5    // "  -9  5"
"  -9  " - 5    // -9-5 = -14
null + 1        // 0 + 1 = 1
undefined + 1   // NaN
" \t \n" - 2    // 0 - 2 = -2   \t and \n are space characters, so they are converted into to a number (0)  

//Fix the adition
let nrA = prompt("First number?", 1);
let nrB = prompt("Second number?", 2);
alert(nrA + nrB); // returns 12 because the prompt is registered as a string, to return 3 => alert(+nrA + +nrB) or +prompt(...)