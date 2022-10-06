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
  magicians_name.forEach((element, index) => {
    let magicians_name_with_great = "The Great " + element;
    console.log(magicians_name_with_great);
  });
}

function show_magicians(magicians_name) {
  magicians_name.forEach((element) => {
    console.log(element);
  });
}
console.log(`\n` + "it's the original array" + `\n`);
show_magicians(magicians_name);
console.log(`\n` + "It's the changed array" + `\n`);
make_great(magicians_name);
