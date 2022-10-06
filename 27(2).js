const ag = "1";
const age = +ag;

if (age < 2) {
  let message1 = "the person is a baby";
  console.log(message1);
} else if (age >= 2 && age < 4) {
  let message2 = "the person is a toddler";
  console.log(message2);
} else if (age >= 4 && age < 13) {
  let message3 = "the person is a kid";
  console.log(message3);
} else if (age >= 13 && age < 20) {
  let message4 = "the person is a adult";
  console.log(message4);
} else if (age >= 20 && age < 65) {
  let message5 = "the person is a elder";
  console.log(message5);
} else if (age >= 65) {
  let message6 = "the person is a toddler";
  console.log(message6);
}
