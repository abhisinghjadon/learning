const value = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty-one",
  "twenty-two",
  "twenty-three",
  "twenty-four",
  "twenty-five",
  "twenty-six",
  "twenty-seven",
  "twenty-eight",
  "twenty-nine",
  "thirty",
  "thirty-one",
  "thirty-two",
  "thirty-three",
  "thirty-four",
  "thirty-five",
  "thirty-six",
  "thirty-seven",
  "thirty-eight",
  "thirty-nine",
  "forty",
  "forty-one",
  "forty-two",
  "forty-three",
  "forty-four",
  "forty-five",
  "forty-six",
  "forty-seven",
  "forty-eight",
  "forty-nine",
  "fifty",
];
const perpage = 5;
let currentPage = 1;

function displayPageTitles(array, page) {
  const container = document.getElementById("display");
  if (!container) return;
  container.innerHTML = "";

  const startIndex = (page - 1) * perpage;
  const endIndex = startIndex + perpage;
  const pageData = array.slice(startIndex, endIndex);

  pageData.forEach((item) => {
    const titleHTML = `
      <div class="value-title-card" style="background: white; padding: 10px 15px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 10px;">
        <h3 style="margin: 0; color: #333;"><strong>${item}</strong></h3>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", titleHTML);
  });
}

function control(array) {
  const container = document.getElementById("display");
  if (!container) return;

  const totalPages = Math.ceil(array.length / perpage);

  const controlsHTML = `
    <div class="pagination-controls" style="margin-top: 15px; display: flex; gap: 10px; align-items: center;">
      <button id="prevBtn" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
      <span>Page <strong>${currentPage}</strong> of <strong>${totalPages}</strong></span>
      <button id="nextBtn" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", controlsHTML);

  document.getElementById("prevBtn")?.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      pagenation(array);
    }
  });

  document.getElementById("nextBtn")?.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      pagenation(array);
    }
  });
}

function pagenation(array) {
  displayPageTitles(array, currentPage);
  control(array);
}

pagenation(value);
