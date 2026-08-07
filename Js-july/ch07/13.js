// Program 98: Demonstrate microtasks vs macrotasks order using setTimeout and Promise.resolve().

//Synchronous

console.log("Start from me ");

//macro --> go into background for running

setTimeout(() => {
  console.log("Hello Macrotask");
}, 2000);

//micro task

Promise.resolve()
  .then(() => {
    console.log(" Microtask 1: Pehla Promise resolve hua");
  })
  .then(() => {
    console.log(" Microtask 2: Dusra chained Promise chal gaya");
  });

console.log("End of file (This run in Second condition)");
