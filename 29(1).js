var userName = "Arsalan";
var name = ["Admin", "Usman", "Ali", "Zamzam", "Arsalan"];
for (let i = 0; i < name.length; i++) {
  if (userName == name[0]) {
    console.log(`Hello ${userName}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }
  break;
}
