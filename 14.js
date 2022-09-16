var list = ["Usman Khan", "Ali Bhatti", "Zamzam Illahi"];
list.forEach(function (list) {
    message = `Assalam o Aleikum, my friend ${list} I would like to invite
     you on dinner of my wedding on 22 Dec 2022.Please! be there ${list}. \n `
    console.log(message);

})
console.log("I am inviting " + (list.indexOf("Zamzam Illahi") + 1) + " persons");
