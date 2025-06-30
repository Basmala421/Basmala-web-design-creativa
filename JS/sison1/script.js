var users = [];

function NumberOfUser() {
  var num = prompt("enter user's numbers");

  for (var i = 0; i < num; i++) {
    addUser();
  }

  console.log("  Total users added:", num);
  console.log(" All users:", users);
}

 
function addUser() {
  var name = prompt("Enter user name:");
  var id = prompt("Enter user ID:");
  var balance = prompt("Enter user balance:");

  var user = {
    name: name,
    id: id,
    balance: balance
  };

  users.push(user);
  console.log(users);
}

 
function updateBalance() {
  var id = prompt("Enter the ID balance:");
  var newBalance = prompt("Enter the new balance (1000 to 2000):");

  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].balance = newBalance;
      console.log("  Balance updated:", users[i]);
      console.log("  Users after update:", users);
      return;
    }
  }

 
}

NumberOfUser()

updateBalance()