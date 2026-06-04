// Program 79: Implement a basic Closure that remembers a counter value.
function createcount() {
  let count = 0;
  return function increment() {
    return ++count;
  };
}
const mycounter = createcount();
console.log(mycounter());
console.log(mycounter());
console.log(mycounter());

//notes
/**
  pehli baar me jab createcount chalta hai tab uske pass ek function aa jata hai fir console me value increase hoti hai count ki 
 */
