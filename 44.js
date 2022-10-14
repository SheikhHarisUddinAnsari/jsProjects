var itemsOnSandwitches1=['ketchup','mayonaise','vegetables','meat'];
var itemsOnSandwitches2=['ketchup','mayonaise','vegetables','meat','ginger','apple','strawberry'];
var itemsOnSandwitches3=['ketchup','mayonaise','vegetables','meat','ginger','apple','strawberry','hello','hi'];
function sandwitch(...items){
    
    console.log(`The sandwitch should have all of the following items `)
    console.table(items)
    
}
sandwitch(...itemsOnSandwitches1);
sandwitch(...itemsOnSandwitches2);
sandwitch(...itemsOnSandwitches3);