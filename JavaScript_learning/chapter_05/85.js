// Program 85: Demonstrate the difference between lexical scope and block scope//

/*
    Lexical Scope means that an inner function has access to variables defined in its outer (parent) function based on where that code was written.

    Block Scope means variables defined inside a specific block (like an IF statement or FOR loop using let or const) are completely locked inside that block and cannot be seen outside of it.
*/

// 1. DEMONSTRATING LEXICAL SCOPE

function outer() {
  const outervar = "I am from the outer variable";
  function inner() {
    console.log(outervar);
  }
  inner();
}

// 2. DEMONSTRATING BLOCK SCOPE

function blockScope() {
  let condition = true;
  if (condition == true) {
    let secretCode = 123456;
    console.log(secretCode);
  }

  //console.log(secretCode); //show Error
}

outer();
blockScope();
