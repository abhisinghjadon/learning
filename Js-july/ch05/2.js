
// Program 77: Write a function that accepts a callback function and executes it.

function process(name, callback) {
  console.log(`Processing data for: ${name}...`);
  return callback(name);
}

function login(name) {
  console.log(`welcome Back ${name} You Login Succeefully!......`);
}

function logout(name) {
  console.log(`See you soon... ${name} You logout Succeefully!......`);
}

process("Abhishek", login);
process("Abhishek", logout);
