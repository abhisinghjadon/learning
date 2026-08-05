// Program 85: Demonstrate the difference between lexical scope and block scope.

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
