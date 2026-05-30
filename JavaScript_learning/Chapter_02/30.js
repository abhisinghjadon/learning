// Program 30: Validate if a string is a valid email address using a basic check.
//for browser
//let email=prompt("Enter your mail")
let email = "abhi@mail.com";
let atIndex = email.indexOf("@");
let dotIndex = email.lastIndexOf(".");
if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
  console.log(`${email} is a Valid email`);
} else {
  console.log(`${email} is NOT a Valid email`);
}
