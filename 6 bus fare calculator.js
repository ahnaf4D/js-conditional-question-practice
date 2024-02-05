/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const regularPrice = 800;
// User Input below
const userAge = 9;
const isChildren = true;
const isSeniorCitizens = false;
const isStudent = false;
// Discount Calculation Below
const fifteenPercentDiscount = (15 * 800) / 100;
const fiftyPercentDiscount = (50 * 800) / 100;
// Application Decision below
if (userAge < 10 && isChildren === true) {
    console.log("You get 100% OFF");
}
else if (userAge >= 60 && isSeniorCitizens === true) {
    console.log(`Pay :  ${fifteenPercentDiscount} BDT with 15% OFF`);
}
else if (isStudent === true && userAge < 28) {
    console.log(`Pay : ${fiftyPercentDiscount} BDT with 50% OFF`);
}
else {
    console.log(`Pay ${regularPrice} without any OFF`);
}