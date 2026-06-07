const myemail = document.getElementById("inputemail");
const mypass = document.getElementById("inputpass");
const errormail = document.getElementById("erremail");
const errorpass = document.getElementById("errpass");
const myform = document.getElementById("form");
myform.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    myemail.value.length === 0 ||
    myemail.value.indexOf("@") === -1 ||
    myemail.value.indexOf(".") === -1 ||
    myemail.value.indexOf("@") === 0
  ) {
    errormail.style.cssText = "color:red;display:block;";
    return;
  } else {
    errormail.style.cssText = "display:none;";
  }

  // form se password check ke liye

  //   if (mypass.value.trim().length < 8) {
  //     errorpass.style.cssText = "color: red; display: block;";
  //     return;
  //   } else {
  //     errorpass.style.cssText = " display: block;";
  //   }

  if (!checkPassword) {
    return;
  }

  alert("form Fill Successfully");
  myform.submit();
});

//realtime password check ke liye
let checkPassword = false;
mypass.addEventListener("input", function () {
  if (mypass.value.trim().length < 8) {
    errorpass.style.cssText = "color: red; display: block;";
    checkPassword = false;
  } else {
    errorpass.style.cssText = "display: none;";
    checkPassword = true;
  }
});

/*
//real time demo checking 

myemail.addEventListener("input", function () {
  if (myemail.value.length >= 0) {
    errormail.style.color = "red";
    console.log(myemail.value.length);
  }
});

mypass.addEventListener("input", function () {
  if (mypass.value.trim().length < 8) {
    errorpass.style.cssText = "color: red; display: block;";
  } else {
    errorpass.style.cssText = "display: none;";
    errorpass.innerText = "";
  }
});
*/
