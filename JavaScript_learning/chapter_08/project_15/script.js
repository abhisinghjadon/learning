const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");
const dhours = document.getElementById("hours");
const dminutes = document.getElementById("minutes");
const dseconds = document.getElementById("seconds");
const derr = document.getElementById("err");
const dnote = document.getElementById("note");
const myAudio = document.getElementById("bell"); // Audio select kiya
let settime;

function addtime() {
  const currentButton = document.getElementById("btn");
  dnote.style.cssText = "display:none;";

  // Change button to Reset
  if (currentButton) {
    currentButton.outerHTML = `<button id="btn" onclick="reset()">Reset</button>`;
  }

  let hours = Number(Hours.value);
  let minutes = Number(Minutes.value);
  let seconds = Number(Seconds.value);

  if (hours == 0 && minutes == 0 && seconds == 0) {
    derr.style.cssText = "display:block;color:red;font-size:2rem";
    console.log("Invalid Time");

    reset();
    return;
  }

  // Clear the input fields immediately once when the timer starts, not inside the interval
  Hours.value = "";
  Minutes.value = "";
  Seconds.value = "";

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  settime = setInterval(() => {
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds / 60) % 60);
    let second = totalSeconds % 60;

    console.log(hour + ":" + minute + ":" + second);

    dhours.textContent = hour <= 9 ? "0" + hour : hour;
    dminutes.textContent = minute <= 9 ? "0" + minute : minute;
    dseconds.textContent = second <= 9 ? "0" + second : second;

    if (totalSeconds <= 0) {
      clearInterval(settime);
      myAudio.play();
      console.log("Done");
      // dnote.style.cssText = "display:block;color:lightgreen;font-size:3rem;  transition: cubic-bezier(0.075, 0.82, 0.165, 1);";
      dnote.style.cssText =
        "display:block; animation:zoomDnote 2s ease-out forwards;color:lightgreen;font-size:5rem;";
      if (!document.getElementById("dnote-anim")) {
        const s = document.createElement("style");
        s.id = "dnote-anim";
        s.innerHTML =
          "@keyframes zoomDnote{0%{transform:translateY(50px) scale(0.5);opacity:0}100%{transform:translateY(0) scale(1);opacity:1}}";
        document.head.appendChild(s);
      }
    }
    totalSeconds--;
  }, 1000);
}

function reset() {
  clearInterval(settime);
  myAudio.currentTime = 0;
  // Re-fetch the current button from the DOM right now
  const currentButton = document.getElementById("btn");
  if (currentButton) {
    currentButton.outerHTML = `<button id="btn" onclick="addtime()">Add</button>`;
  }

  derr.style.cssText = "display:none;";

  dhours.textContent = "00";
  dminutes.textContent = "00";
  dseconds.textContent = "00";
  myAudio.pause();
  dnote.style.display = "none";
  myAudio.currentTime = 0;
}
