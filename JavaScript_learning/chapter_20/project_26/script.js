const image = document.getElementById("myImage");
const source = ["10101.jpg", "10102.jpg", "10103.jpg"];
let current = 0;
function change(a) {
  if (a == "next") {
    current++;
  } else {
    if (current == 0) {
      current = 2;
    } else current--;
  }

  if (current >= source.length) {
    current = 0;
  }

  image.src = source[current];

  //auto run like slideshow  after 1 sec change Image
}

setInterval(() => {
  change("next");
}, 3000);
