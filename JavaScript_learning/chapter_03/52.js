// Program 52: Find the index of the first occurrence of an element.
let arr = [10, 20, 30, 40, 20, 50];
let target = 20;
let foundIndex = arr.indexOf(target);
console.log("Index of first occurrence:", foundIndex);

//simple logic
/*
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        foundIndex = i; 
        break;          
    }
}
*/
