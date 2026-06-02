// Program 65: Merge two objects into a single combined object.
// Do alag-alag objects banaye
const carBasicDetails = {
  brand: "Honda",
  model: "Civic",
};

const carExtraDetails = {
  year: 2026,
  color: "Black",
};

// Method 1: Using the Spread Operator (...) use in modern
const mergedCar1 = { ...carBasicDetails, ...carExtraDetails };

console.log("Method 1 (Spread Operator):");
console.log(mergedCar1);

// Method 2: Using Object.assign()

// Ye pehle khali object {} mein baaki saare objects ka data copy kar deta hai
const mergedCar2 = Object.assign({}, carBasicDetails, carExtraDetails);

console.log("\nMethod 2 (Object.assign):");
console.log(mergedCar2);

/*
NOTES:-

Agar dono objects mein koi seme name ki key (property) ho, to kya hoga?
Jo object baad mein (right side) likha hoga, uski value purani value ko overwrite (badal) degi.

*/
