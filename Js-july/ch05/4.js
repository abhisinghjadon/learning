
// Program 79: Implement a basic Closure that remembers a counter value.

function create() {
  let counter = 0;
  return function icrement() {
    return ++counter;
  };
}

const coun = create();
console.log(coun());
console.log(coun());
console.log(coun());
console.log(coun());
