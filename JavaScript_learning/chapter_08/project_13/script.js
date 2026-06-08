const shours = document.getElementById("hours");
const sminutes = document.getElementById("minutes");
const sseconds = document.getElementById("seconds");
const stime = document.getElementById("times");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let time = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // Agar hour 0 hai (raat ke 12 baje), toh use 12 bana do
  shours.textContent = hour <= 9 ? "0" + hour : hour;
  sminutes.textContent = minute <= 9 ? "0" + minute : minute;
  sseconds.textContent = second <= 9 ? "0" + second : second;
  stime.textContent = time;
}, 1000);
