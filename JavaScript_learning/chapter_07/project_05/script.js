const myInput = document.getElementById("myInput");
document.getElementById("showPassword").addEventListener("click", function () {
  if (myInput.type === "password") {
    myInput.type = "text";
  } else {
    myInput.type = "password";
  }
});
