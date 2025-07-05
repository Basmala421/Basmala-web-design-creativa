function addUser() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let balance = document.getElementById("balance").value;

  if (!name || !id || !balance) {
    alert("Please fill all fields");
    return;
  }

  let tableBody = document.getElementById("userTableBody");
  let row = tableBody.insertRow();

  let nameCell = row.insertCell(0);
  let balanceCell = row.insertCell(1);
  let idCell = row.insertCell(2);
  let actionsCell = row.insertCell(3);

  nameCell.textContent = name;
  balanceCell.textContent = balance;
  idCell.textContent = id;

  
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm me-2";
  deleteBtn.onclick = function () {
    tableBody.deleteRow(row.rowIndex - 1);
  };

  
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit Balance";
  editBtn.className = "btn btn-info btn-sm text-white";
  editBtn.onclick = function () {
    let newBalance = prompt("Enter new balance:", balanceCell.textContent);
    if (newBalance !== null && newBalance.trim() !== "") {
      balanceCell.textContent = newBalance;
    }
  };

  actionsCell.appendChild(deleteBtn);
  actionsCell.appendChild(editBtn);


  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
  document.getElementById("balance").value = "";
}