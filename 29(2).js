var userName = "Arsalan";
var name = [];
for (let i = 0; i < name.length; i++) {
  if (userName == name[0]) {
    console.log(`Hello ${userName}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }
}
if (name === undefined || name.length == 0) {
  console.log("We need to find some users!");
}
