const leger = document.getElementById("allLedger");
const keys = Object.keys(localStorage).filter((key) => key !== "appBalance");
const ul = document.createElement("ul");

let balanceValue = localStorage.getItem("appBalance")
  ? Number(localStorage.getItem("appBalance"))
  : 5000;
let currentEditingKey = "";

keys.forEach((key) => {
  const li = document.createElement("li");
  li.textContent = key;

  li.onclick = function () {
    ledgerDetail(key);
  };

  ul.appendChild(li);
});

if (leger) {
  leger.innerHTML = "";
  leger.appendChild(ul);
}

const detail = document.getElementById("details");

function ledgerDetail(ledgerName) {
  if (!detail) return;

  const rawData = localStorage.getItem(ledgerName);
  let print = `<h3>Ledger Name: ${ledgerName}</h3>`;

  if (rawData && rawData.startsWith("[")) {
    const entries = JSON.parse(rawData);

    // Completely stripped layout attributes from here, handled cleanly inside CSS file now
    print += `<table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Expense Title</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>`;

    entries.forEach((item) => {
      print += `<tr>
                  <td>${item.serial}</td>
                  <td>${item.title}</td>
                  <td>₹${item.amount}</td>
                </tr>`;
    });

    print += `  </tbody>
              </table>`;
  } else {
    print += `<div style="margin-bottom: 15px; color: var(--text-muted);">No transaction records yet. Let's start tracking!</div>`;
  }

  print += `<button onclick="showUpdateBox('${ledgerName}')">Update Ledger</button>`;
  detail.innerHTML = print;
}

function showUpdateBox(key) {
  currentEditingKey = key;

  const update = document.getElementById("update");
  if (!update) return;

  update.classList.remove("hide");
  update.classList.add("active");

  const titleInput = document.getElementById("newTitle");
  const amountInput = document.getElementById("amount");
  if (titleInput) titleInput.value = "";
  if (amountInput) amountInput.value = "";
}

function updateled() {
  if (!currentEditingKey) return;

  const titleInput = document.getElementById("newTitle");
  const amountInput = document.getElementById("amount");
  if (!titleInput || !amountInput) return;

  let title = titleInput.value.trim();
  let amount = Number(amountInput.value.trim());

  if (title === "" || isNaN(amount) || amountInput.value.trim() === "") {
    alert("Please enter valid title and amount");
    return;
  }
  if (amount > balanceValue) {
    alert("Insufficient Amount");
    return;
  }

  let entriesArray = [];
  let existingData = localStorage.getItem(currentEditingKey);

  if (existingData && existingData.startsWith("[")) {
    entriesArray = JSON.parse(existingData);
  } else if (existingData && existingData !== "") {
    try {
      let oldObj = JSON.parse(existingData);
      if (oldObj.title) {
        oldObj.serial = 1;
        entriesArray.push(oldObj);
      }
    } catch (e) {}
  }

  let nextSerial = entriesArray.length + 1;
  const newEntry = { serial: nextSerial, title: title, amount: amount };
  entriesArray.push(newEntry);

  localStorage.setItem(currentEditingKey, JSON.stringify(entriesArray));

  balanceValue = balanceValue - amount;
  localStorage.setItem("appBalance", balanceValue);

  const update = document.getElementById("update");
  if (update) {
    update.classList.remove("active");
    update.classList.add("hide");
  }

  location.reload();
}

function toggleLedgerForm() {
  if (detail) detail.innerHTML = "";

  const ledgerDiv = document.getElementById("add");
  if (!ledgerDiv) return;

  if (ledgerDiv.classList.contains("hide")) {
    ledgerDiv.classList.remove("hide");
    ledgerDiv.classList.add("active");
  } else {
    ledgerDiv.classList.remove("active");
    ledgerDiv.classList.add("hide");
  }
}

function addNewLedger() {
  const nameLedger = document.getElementById("nameLedger").value.trim();
  if (nameLedger === "") return;
  localStorage.setItem(nameLedger, "");
  location.reload();
}

function balance() {
  const balane = document.getElementById("balance");
  if (balane) {
    balane.textContent = "Current Balance Pool: ₹" + balanceValue;
    if (balane.classList.contains("hide")) {
      balane.classList.remove("hide");
      balane.classList.add("active");
    } else {
      balane.classList.remove("active");
      balane.classList.add("hide");
    }
  }
} // Window load hote hi default Home Dashboard load ho
window.addEventListener("DOMContentLoaded", () => {
  renderHomeDashboard();
});

function renderHomeDashboard() {
  // Purani active containers ko hidden handle karein
  const addForm = document.getElementById("add");
  const updateForm = document.getElementById("update");
  const balanceDiv = document.getElementById("balance");

  if (addForm) addForm.className = "hide card";
  if (updateForm) updateForm.className = "hide card";
  if (balanceDiv) balanceDiv.className = "hide card balance-card";

  if (!detail) return;

  // Calculate Advanced Metrics Data
  const allKeys = Object.keys(localStorage).filter(
    (key) => key !== "appBalance",
  );
  let totalLedgers = allKeys.length;
  let totalExpenseAmount = 0;
  let highestSingleExpense = 0;
  let highestExpenseTitle = "None";

  allKeys.forEach((key) => {
    const rawData = localStorage.getItem(key);
    if (rawData && rawData.startsWith("[")) {
      try {
        const entries = JSON.parse(rawData);
        entries.forEach((item) => {
          const amt = Number(item.amount) || 0;
          totalExpenseAmount += amt;
          if (amt > highestSingleExpense) {
            highestSingleExpense = amt;
            highestExpenseTitle = item.title;
          }
        });
      } catch (e) {
        console.error("Error parsing ledger: " + key, e);
      }
    }
  });

  // Render Modern Dashboard UI inside dynamic detail container
  detail.innerHTML = `
    <div class="dashboard-grid">
      <div class="metric-card">
        <span class="metric-icon">📂</span>
        <div class="metric-info">
          <h3>Total Ledgers</h3>
          <p class="metric-value">${totalLedgers}</p>
        </div>
      </div>
      
      <div class="metric-card accent-purple">
        <span class="metric-icon">💰</span>
        <div class="metric-info">
          <h3>Wallet Balance</h3>
          <p class="metric-value">₹${balanceValue}</p>
        </div>
      </div>

      <div class="metric-card accent-red">
        <span class="metric-icon">📉</span>
        <div class="metric-info">
          <h3>Total Expenses</h3>
          <p class="metric-value">₹${totalExpenseAmount}</p>
        </div>
      </div>

      <div class="metric-card accent-orange">
        <span class="metric-icon">⚠️</span>
        <div class="metric-info">
          <h3>Peak Spending</h3>
          <p class="metric-value">₹${highestSingleExpense}</p>
          <small class="metric-desc">Item: ${highestExpenseTitle}</small>
        </div>
      </div>
    </div>

    <div class="welcome-banner">
      <h3>Welcome Back Tracker! 👋</h3>
      <p>Your financial summaries look healthy. Use the upper navigational panels to manage ledger transaction instances natively inside local storage logs.</p>
    </div>
  `;
}

// const leger = document.getElementById("allLedger");
// const keys = Object.keys(localStorage).filter((key) => key !== "appBalance");
// const ul = document.createElement("ul");

// let balanceValue = localStorage.getItem("appBalance")
//   ? Number(localStorage.getItem("appBalance"))
//   : 5000;
// let currentEditingKey = "";

// keys.forEach((key) => {
//   const li = document.createElement("li");
//   li.textContent = key;
//   li.style.cursor = "pointer";

//   li.onclick = function () {
//     ledgerDetail(key);
//   };

//   ul.appendChild(li);
// });

// if (leger) {
//   leger.innerHTML = "";
//   leger.appendChild(ul);
// }

// const detail = document.getElementById("details");

// function ledgerDetail(ledgerName) {
//   if (!detail) return;

//   const rawData = localStorage.getItem(ledgerName);
//   let print = `<h3>Ledger Name: ${ledgerName}</h3>`;

//   if (rawData && rawData.startsWith("[")) {
//     const entries = JSON.parse(rawData);

//     print += `<table border="1" style="border-collapse: collapse; width: 100%; text-align: left; margin-bottom: 15px;">
//                 <thead>
//                   <tr style="background-color: #f2f2f2;">
//                     <th style="padding: 8px;">S.No</th>
//                     <th style="padding: 8px;">Expense Title</th>
//                     <th style="padding: 8px;">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>`;

//     entries.forEach((item) => {
//       print += `<tr>
//                   <td style="padding: 8px;">${item.serial}</td>
//                   <td style="padding: 8px;">${item.title}</td>
//                   <td style="padding: 8px;">${item.amount}</td>
//                 </tr>`;
//     });

//     print += `  </tbody>
//               </table>`;
//   } else {
//     print += `<div>No table data found or old format data: ${rawData}</div>`;
//   }

//   print += `<button onclick="showUpdateBox('${ledgerName}')">Update Ledger</button>`;
//   detail.innerHTML = print;
// }

// function showUpdateBox(key) {
//   currentEditingKey = key;

//   const update = document.getElementById("update");
//   if (!update) return;

//   update.classList.remove("hide");
//   update.classList.add("active");

//   const titleInput = document.getElementById("newTitle");
//   const amountInput = document.getElementById("amount");
//   if (titleInput) titleInput.value = "";
//   if (amountInput) amountInput.value = "";
// }

// function updateled() {
//   if (!currentEditingKey) return;

//   const titleInput = document.getElementById("newTitle");
//   const amountInput = document.getElementById("amount");
//   if (!titleInput || !amountInput) return;

//   let title = titleInput.value.trim();
//   let amount = Number(amountInput.value.trim());

//   if (title === "" || isNaN(amount) || amountInput.value.trim() === "") {
//     alert("Please enter valid title and amount");
//     return;
//   }

//   let entriesArray = [];
//   let existingData = localStorage.getItem(currentEditingKey);

//   if (existingData && existingData.startsWith("[")) {
//     entriesArray = JSON.parse(existingData);
//   } else if (existingData && existingData !== "") {
//     try {
//       let oldObj = JSON.parse(existingData);
//       if (oldObj.title) {
//         oldObj.serial = 1;
//         entriesArray.push(oldObj);
//       }
//     } catch (e) {}
//   }

//   let nextSerial = entriesArray.length + 1;
//   const newEntry = { serial: nextSerial, title: title, amount: amount };
//   entriesArray.push(newEntry);

//   localStorage.setItem(currentEditingKey, JSON.stringify(entriesArray));

//   balanceValue = balanceValue - amount;
//   localStorage.setItem("appBalance", balanceValue);

//   const update = document.getElementById("update");
//   if (update) {
//     update.classList.remove("active");
//     update.classList.add("hide");
//   }

//   location.reload();
// }
// function toggleLedgerForm() {
//   if (detail) detail.innerHTML = "";

//   const ledgerDiv = document.getElementById("add");
//   if (!ledgerDiv) return;

//   if (ledgerDiv.classList.contains("hide")) {
//     ledgerDiv.classList.remove("hide");
//     ledgerDiv.classList.add("active");
//   } else {
//     ledgerDiv.classList.remove("active");
//     ledgerDiv.classList.add("hide");
//   }
// }

// function addNewLedger() {
//   const nameLedger = document.getElementById("nameLedger").value.trim();
//   if (nameLedger === "") return;
//   localStorage.setItem(nameLedger, "");
//   location.reload();
// }

// function balance() {
//   const balane = document.getElementById("balance");
//   if (balane) {
//     balane.textContent = balanceValue;
//     if (balane.classList.contains("hide")) {
//       balane.classList.remove("hide");
//       balane.classList.add("active");
//     } else {
//       balane.classList.remove("active");
//       balane.classList.add("hide");
//     }
//   }
// }
