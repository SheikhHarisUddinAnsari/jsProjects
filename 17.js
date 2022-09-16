var list = ["Shazmin", "Usman Khan", "Umar", "Ali Bhatti", "Zamzam Illahi", "Khizra"];
const message1 = "My big dinner table won't arrive on time.So I can invite only 2 people for dinner ";
console.log(message1);
function removal() {
    const message2 = "Sorry we can't invite you";
    for (let i = 0; i <= 3; i++) {
        const uninvite = list.pop();
        console.log(message2 + " " + uninvite);
    };


};
removal(list);


function invitation() {
    const list2 = list; for (let i = 0; i < 2; i++) {
        const message3 = ("You are invited at my dinner, my dear friend " + list2[i]);
        console.log(message3);
    };
};
invitation(list);
console.log("I am inviting " + (list.indexOf("Usman Khan") + 1) + " persons");


