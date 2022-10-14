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
  var copyMagicians = magicians_name.slice();
  copyMagicians.forEach((element, index) => {
    copyMagicians[index] = "The Great " + element;
  });
  copyMagicians.forEach((element) => {
    return element;
  });
  console.log(copyMagicians);
}

function show_magicians(magicians_name) {
  console.log(magicians_name);
}
make_great(magicians_name);
show_magicians(magicians_name);
