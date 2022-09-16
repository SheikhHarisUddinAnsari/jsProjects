var list = ["Usman Khan", "Ali Bhatti", "Zamzam Illahi"];
const message1 = "Assalam o Aleikum, guyz now I have found a bigger dinner table so now I am inviting more people."
var newGuests = ["Shazmin", "Umar"];
list.unshift(newGuests[0]);
list.splice(2, 0, newGuests[1]);
console.log(message1);
console.log(list);
last = "Khizra"
list.push(last);
console.log(list);
console.log("I am inviting " + (list.indexOf("Khizra") + 1) + " persons");

