//Introduction ###########
//conditional statement
//Array & object
//loop
//functions
//string number boolean null bigint
//object arrays

const items = {
    food: 50,
    water: 260,
    drinks: 200,
};
var cart = 0;
var hisFunction = () => console.log("mashed UP");
var myFunction = (items) => {
    return cart + items;

}
var addToCart = (item) => {
    cart = myFunction(item);
};
addToCart(items.drinks);
console.log("cart:", cart);
