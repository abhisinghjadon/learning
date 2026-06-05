// Program 94: Use Promise.race to get the result from the fastest resolving mock promise.
function race(time, value, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "fulfill") {
        resolve(value);
      } else {
        reject(new Error(value));
      }
    }, time);
  });
}
function check(a, b) {
  Promise.race([a, b])
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
}
// const p1 = race(500, "one", "fulfill");
// const p2 = race(1000, "two", "fulfill");
// check(p1, p2);

const p1 = race(500, "one", "reject");
const p2 = race(1000, "two", "fulfill");
check(p1, p2);
