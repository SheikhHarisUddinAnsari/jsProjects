function make_shirt(size: number | string, message: string) {
  let sentence: string;
  sentence = `size: ${size} \n ${message}`;
  console.log(sentence);
}
make_shirt("large 10 ", " I love Javascript");
