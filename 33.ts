type animals = string[];
var animals = ["Lion", "Tiger", "Leopard"];
function comStatement(animals) {
  type message = string;
  const message = "All of these animals hunt their food";
  for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    console.log(element);
  }
  console.log(message);
}

comStatement(animals);
