const startup = document.getElementById("startup");
const punchline = document.getElementById("punchline");

async function getjoke() {
  const joke = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await joke.json();
  startup.textContent = data.setup;
  punchline.textContent = data.punchline;
  // console.log(data.setup);
}
getjoke();
