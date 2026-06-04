// Program 84: Create a function that curries a 2-argument mathematical operation.

function curries(a) {
  return function add(b) {
    return a + b;
  };
}

const a = curries(10);
const b = a(10);
console.log(b);

// modern way
const curriedAddShort = (a) => (b) => a + b;

// Isko call karne ka ek aur direct tarika (bina alag variable banaye):
console.log(curriedAddShort(10)(10));

/** 
a => ...: Pehla function input a leta hai aur badle mein ek doosra function return karta hai.

b => a + b: Andar wala function input b leta hai aur donon ka jod (a + b) return kar deta hai
 */
