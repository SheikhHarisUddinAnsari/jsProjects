var animals = ["Lion", "Tiger", "Leopard"];
function comStatement(animals) {
    var message = "All of these animals hunt their food";
    for (var i = 0; i < animals.length; i++) {
        var element = animals[i];
        console.log(element);
    }
    console.log(message);
}
comStatement(animals);
