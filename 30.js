const current_users = ["zamzam", "usman", "ali", "shazmin", "arsalan"];
const new_users = ["umar", "esha", "sharjeel", "shazmin", "arsalan"];
for (let i = 0; i < current_users.length; i++) {
  {
    if (current_users[i] == new_users[i]) {
      console.log("The person will need to enter a new username.");
    } else {
      console.log("The username is available.");
    }
  }
}
