// Program 31: Convert a string to slug-case (e.g., "Hello World" -> "hello-world").
//for browser
//let str=prompt("Enter String")

//un-optimized code
/*  
    let str = "Hello World   ";
    let strlower = str.toLowerCase();
    let strtrim = strlower.trim();
    let result = strtrim.replaceAll(" ", "-");
    console.log(`${str} -> ${result}`);
    */

//optimized code
let str = "Hello World   ";
let result = str.toLowerCase().trim().replaceAll(" ", "-");
console.log(`${str} -> ${result}`);
