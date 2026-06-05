// Program 98: Demonstrate microtasks vs macrotasks order using setTimeout and Promise.resolve().

// Synchronous Code (Pehle execute hoga)
console.log(" Start: Normal Script Line 1");

// Macrotask (Normal Line - Background mein chala jaayega)
setTimeout(() => {
  console.log(" Macrotask: setTimeout chal gaya (Bhale hi 0ms ka timer tha)");
}, 0);

// Microtask (VIP Line - Call stack khali hote hi turant chalega)
Promise.resolve()
  .then(() => {
    console.log(" Microtask 1: Pehla Promise resolve hua");
  })
  .then(() => {
    console.log(" Microtask 2: Dusra chained Promise chal gaya");
  });

// Synchronous Code (Dusre number par execute hoga)
console.log(" End: Normal Script Line Last");

/**
 * Execution Order:
Step 1 (Synchronous Code): Aapki poori 100 lines ek ke baad ek line-by-line chalengi.

Step 2 (Microtask / VIP Line): Jab 100 lines poori khatam ho jayengi aur call stack khali ho jayega, tab saare Promises (.then(), async/await) chalenge.

Step 3 (Macrotask / Normal Line): Sabse aakhiri mein setTimeout ya setInterval ka number aayega.
 */
