function print_message(items: string[]) {
  console.log(
    `\n Make a sandwitch which should have ${items.length} items that are ${items}`
  );
}

print_message(["Ham", "Ploughmans", "German Sausage Slices"]);

print_message(["Sliced Pepperoni", "Pepperoni", "Cheese", "Prosciutto"]);

print_message([
  "Bacon",
  "Tomato",
  "Brie",
  "Cheddar",
  "Goats Cheese ",
]);
