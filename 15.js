const list = ["Usman Khan", "Ali Bhatti", "Zamzam Illahi"];
const unableList = ["Zamzam Illahi"];
console.log(unableList + ` is unable to make to my wedding.\n`);
const newPerson = "Emad Ansari";
const newlist = list.splice(2, 1, newPerson);
list.forEach(function (newlist) {
    message = `Assalam o Aleikum, my friend ${newlist} I would like to invite
     you on dinner of my wedding on 22 Dec 2022.Please! be there ${newlist}. \n `
    console.log(message);
});
console.log("I am inviting " + (list.indexOf("Emad Ansari") + 1) + " persons");