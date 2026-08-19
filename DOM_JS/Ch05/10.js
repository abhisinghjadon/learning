/**
 * Program 150: Dynamic Task Board (Complete DOM Integration)
Task: Build a task board where users can add tasks, mark them as complete (toggling styles via delegation), filter tasks (All/Active/Completed), and remove tasks dynamically.
Syntax Focus: Comprehensive integration of Selection, Manipulation, Delegation, Traversal, and LocalStorage.

 */
const body = document.getElementById("task-body");
const form = document.getElementById("add");

let saveTasks = JSON.parse(localStorage.getItem("key")) || [];
function rendertasks() {
  body.innerHTML = "";
  console.log(saveTasks);

  saveTasks.forEach((item, index) => {
    const row = document.createElement("tr");
    const c1 = document.createElement("td");
    const c2 = document.createElement("td");
    const c3 = document.createElement("td");
    const c4 = document.createElement("td");
    const btnToggle = document.createElement("button");
    const btnDelete = document.createElement("button");

    c1.innerText = index + 1;

    let id = item.id;

    c2.innerText = item.task;
    c3.innerText = item.status ? "Completed" : "Pending";

    btnToggle.innerText = item.status ? "Undo" : "Complete";
    btnToggle.addEventListener("click", () => toggleStatus(item.id));

    btnDelete.innerText = "Delete";
    btnDelete.addEventListener("click", () => deleteTask(item.id));

    c4.append(btnToggle, btnDelete);

    row.append(c1, c2, c3, c4);
    body.append(row);
  });
}

function toggleStatus(id) {
  const task = saveTasks.find((item) => item.id === id);
  if (task) {
    task.status = !task.status;
    localStorage.setItem("key", JSON.stringify(saveTasks));
    rendertasks();
  }
}

function deleteTask(id) {
  saveTasks = saveTasks.filter((item) => item.id !== id);
  localStorage.setItem("key", JSON.stringify(saveTasks));
  rendertasks();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = document.getElementById("new");
  const taskText = newTask.value.trim();

  const data = {
    id: Date.now(),
    task: taskText,
    status: false,
  };

  saveTasks = [...saveTasks, data];

  localStorage.setItem("key", JSON.stringify(saveTasks));

  rendertasks();

  form.reset();
});
rendertasks();

// document.getElementById("all", rendertasks);
// document.getElementById("active", () => {
//   saveTasks = saveTasks.filter((item) => item.status === false);

//   rendertasks();
// });
// document.getElementById("completed", () => {
//   console.log("completed");

//   saveTasks = saveTasks.filter((item) => item.status === true);

//   rendertasks();
// });
const filters = document.getElementById("filters");

filters.addEventListener("click", (e) => {
  saveTasks = JSON.parse(localStorage.getItem("key")) || [];

  const selected = e.target.dataset.filter;
  if (!selected) {
    return;
  }
  if (selected == "all") {
    rendertasks();
  } else if (selected == "active") {
    saveTasks = saveTasks.filter((item) => item.status === false);
    rendertasks();
  } else if (selected == "completed") {
    saveTasks = saveTasks.filter((item) => item.status === true);
    rendertasks();
  }
});
