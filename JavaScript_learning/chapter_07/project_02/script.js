function colorchange() {
  const randomNum = Math.floor(Math.random() * 16777215);
  const hexCode = "#" + randomNum.toString(16).padStart(6, "0");
  document.body.style.backgroundColor = hexCode;
  document.getElementById("color").textContent = hexCode;
}
