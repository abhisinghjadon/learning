const data = [
  {
    question:
      "Which programming language is known as the 'language of the web'?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Management Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which of the following is used to style a webpage?",
    options: ["HTML", "CSS", "SQL", "XML"],
    answer: "CSS",
  },
  {
    question:
      "What is the correct syntax to log something to the console in JavaScript?",
    options: ["console.print()", "log.console()", "print()", "console.log()"],
    answer: "console.log()",
  },
  {
    question: "Which HTML tag is used to link a JavaScript file?",
    options: [
      "&lt;script&gt;",
      "&lt;js&gt;",
      "&lt;javascript&gt;",
      "&lt;link&gt;",
    ],
    answer: "&lt;script&gt;",
  },
];

let currentQuestion = 0;
let score = 0;
let timerId = null;

const display = document.getElementById("display");
const result = document.getElementById("result");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

function questionFetch() {
  if (currentQuestion >= data.length) {
    display.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center;">
        <h2>Quiz Completed! 🎉</h2>
        <p>Your Score: <strong>${score} / ${data.length}</strong></p>
      </div>
    `;
    result.innerHTML = "";
    if (next) next.disabled = true;
    if (previous) previous.disabled = true;
    return;
  }

  display.innerHTML = "";
  result.innerHTML = "";

  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }

  if (previous) previous.disabled = currentQuestion === 0;
  if (next) next.disabled = currentQuestion === data.length - 1;

  const titleHTML = `
      <div class="value-title-card" style="background: lightgreen; padding: 10px 15px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 10px;">
        <h3 style="margin: 0; color: #333;"><strong>${data[currentQuestion].question}</strong></h3>
      </div>
      <div>
        <ol>
          <li onclick="checkAnswer(0)" style="cursor: pointer; margin-bottom: 5px;">${data[currentQuestion].options[0]}</li>
          <li onclick="checkAnswer(1)" style="cursor: pointer; margin-bottom: 5px;">${data[currentQuestion].options[1]}</li>
          <li onclick="checkAnswer(2)" style="cursor: pointer; margin-bottom: 5px;">${data[currentQuestion].options[2]}</li>
          <li onclick="checkAnswer(3)" style="cursor: pointer; margin-bottom: 5px;">${data[currentQuestion].options[3]}</li>
        </ol>
      </div>
    `;
  display.innerHTML = titleHTML;
}

function checkAnswer(num) {
  if (timerId) return;

  if (data[currentQuestion].options[num] === data[currentQuestion].answer) {
    score++;
    result.innerHTML = `<p align="center" style="color: green; font-weight: bold;">Your Answer is Correct</p>`;
    timerId = setTimeout(() => {
      nextQuestion();
    }, 2000);
  } else {
    result.innerHTML = `<p align="center" style="color: red; font-weight: bold;">Your Answer is Wrong</p>`;
    timerId = setTimeout(() => {
      nextQuestion();
    }, 2000);
  }
}

function nextQuestion() {
  if (currentQuestion < data.length) {
    currentQuestion++;
    questionFetch();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    questionFetch();
  }
}

if (next) next.addEventListener("click", nextQuestion);
if (previous) previous.addEventListener("click", previousQuestion);

questionFetch();
