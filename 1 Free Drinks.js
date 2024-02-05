/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const burgerPrice = 399;
const howMuchBuy = 3;
const totalBurgerCost = burgerPrice * howMuchBuy;
const cokePrice = 30;
if (totalBurgerCost > 500) {
    console.log("You Get Free coke");
}
else {
    console.log(`You purchase coke with ${cokePrice} BDT`);
}