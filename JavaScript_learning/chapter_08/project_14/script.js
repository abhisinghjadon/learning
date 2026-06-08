const shours = document.getElementById("hours");
const sminutes = document.getElementById("minutes");
const sseconds = document.getElementById("seconds");
const stime = document.getElementById("times");
const derr = document.getElementById("err");
//const tbody = document.getElementById("tbody");
const date = new Date();
let count = 1;
let elapsedTime = 0;
let starttimer;
let first = true,
  run = false;
let time = "";
function startTimer() {
  run = true;
  first = false;
  document.getElementById("btn").outerHTML =
    `<button id="btn" onclick="stopTimer()">Stop</button>`;
  starttimer = setInterval(() => {
    const date2 = new Date();
    elapsedTime = date2 - date;
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let second = Math.floor((elapsedTime / 1000) % 60);
    let milli = Math.floor((elapsedTime % 1000) / 1);
    shours.textContent = hour <= 9 ? "0" + hour : hour;
    sminutes.textContent = minute <= 9 ? "0" + minute : minute;
    sseconds.textContent = second <= 9 ? "0" + second : second;
    stime.textContent = milli;
  }, 10);
}

function report() {
  let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let second = Math.floor((elapsedTime / 1000) % 60);
  let milli = Math.floor(elapsedTime % 1000);
  time = hour + ":" + minute + ":" + second + ":" + milli;
  showData();
}

function stopTimer() {
  report();
  clearInterval(starttimer);
  document.getElementById("btn").outerHTML =
    `<button id="btn" onclick="startTimer()">Start</button>`;
}

let tableupdate = 0;
function showData() {
  const tableBody = document.getElementById("tablebody");

  if (first == true && run == false) {
    tableBody.innerHTML = `<tr id="r1"><td colspan="2">No Data Available</td></tr>`;
    return;
  }
  tableupdate++;
  if (tableupdate == 1) {
    tableBody.innerHTML = "";
  }
  const template = `
      <tr>
        <td>${count}</td> 
        <td>${time}</td>
      </tr>
    `;
  count++;
  tableBody.insertAdjacentHTML("beforeend", template);
}

window.showData();
