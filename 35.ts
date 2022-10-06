function make_shirt(size: number | string, message: string) {
  let sentence: string;
  sentence = `size: ${size} \n ${message}`;
  console.log(sentence);
}
let input = "";

switch (input) {
  case "small":
    var size = "small";
    var message = "I love my friends";
    break;
  case "medium":
    size = "medium";
    message = "I love Js";
    break;
  case "large":
  default:
    size = "large";
    message = "I love Js";
    break;
  case "extra large":
    size = "extra large";
    message = "I hate school";
    break;
  case "exra extra large":
    size = "extra extra large";
    message = "I hate school";
    break;
}
make_shirt(size, message);
