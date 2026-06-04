// Program 83: Implement an Immediately Invoked Function Expression (IIFE).

//basic
(function () {
  // Iske andar ke variables bahar ki duniya se safe hain
  const localMessage = "Initializing system setup...";
  console.log(localMessage);

  // Setup logic
  console.log("Database connection established successfully!");
})();

// console.log(localMessage); // ReferenceError: localMessage is not defined

//IIFE Parameters aur Arguments ke sath

(function (currentYear, appName) {
  console.log(`Welcome to ${appName}!`);
  console.log(`Copyright © ${currentYear} | All Rights Reserved.`);
})(2026, "Java Script Demo");

//Modern Arrow Function IIFE
(() => {
  console.log("Arrow function wala IIFE !");
})();
