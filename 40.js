var magicians_name = [
    "David Copperfield",
    "Doug Henning",
    "Siegfried and Roy",
    "Lance Burton",
    "Ricky Jay",
    "Mark Wilson",
    "Penn and Teller",
    "Harry Anderson",
    "Jeff McBride",
    "Cyril Takayama",
];
function make_great(magicians_name) {
    magicians_name.forEach(function (element, index) {
        magicians_name[index] = "The Great " + element;
    });
}
function show_magicians(magicians_name) {
    magicians_name.forEach(function (element) {
        console.log(element);
    });
}
make_great(magicians_name);
show_magicians(magicians_name);
