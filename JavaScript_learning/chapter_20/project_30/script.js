const box = document.getElementById("box");
box.addEventListener("input", function () {
  const value = box.value.trim();
  const display = document.getElementById("display");
  resultDiv.style.display = "block";
  if (value.length === 0) {
    if (display) display.innerHTML = "";
    return;
  }

  const oldScript = document.getElementById("google-jsonp");
  if (oldScript) oldScript.remove();

  const url = `https://suggestqueries.google.com/complete/search?client=youtube&q=${encodeURIComponent(value)}&callback=Suggestion`;

  const script = document.createElement("script");
  script.id = "google-jsonp";
  script.src = url;
  document.body.appendChild(script);
});
const resultDiv = document.getElementById("result");
window.Suggestion = function (data) {
  //console.log(data);
  const print = data[1].slice(0, 10);

  resultDiv.innerHTML = "";

  const ul = document.createElement("ul");

  print.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element[0];

    li.addEventListener("click", () => {
      box.value = element[0];
      resultDiv.innerHTML = "";
      resultDiv.style.display = "none";
    });

    ul.appendChild(li);
  });

  resultDiv.appendChild(ul);

  const oldScript = document.getElementById("google-jsonp");
  if (oldScript) oldScript.remove();
};
