var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 1; i <= numbers.length; i++)
  switch (i) {
    case 1:
      console.log(i + "st");
      continue;
    case 2:
      console.log(i + "nd");
      continue;
    case 3:
      console.log(i + "rd");
      continue;
    default:
      console.log(i + "th");
  }
