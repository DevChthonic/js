// var myAge = 18

// if(myAge < 21) {

// }

/* IF STATEMENT

followed by set of parentheses
inside these parentheses we need to specify the condition
typically we use a relational operator
if myage is less than 21 is written in code as: if(myAge < 21)
- if is the beginning of the conditional loop
- myAge is the variable we've defined
- < is the relational operator (less than)
we're providing a value with myAge and comparing it to the literal value of 21

*/

// var myAge = 18

// if(myAge < 21) {
//     console.log("You are not eligible to drink.");
// }

/* SCOPE / BLOCK

You can think of what's inside the curly braces as a scope, or sometimes a block.
Every statement we write inside this scope / block will be executed conditionally.

*/

// var myAge = 18
// console.log(myAge < 21);
// if(myAge < 21) {
//     console.log("You are not eligible to drink.");
//     console.log("You are going to be kicked out of the bar.");
// }

/* IF STATEMENT (ONLY OVER 21 CASE)

Because myAge is below 21, the interpreter will log what we've asked since we've used the less than relational operator.
If myAge was higher than 21, the interpreter will do nothing because we haven't covered that case.

*/

var myAge = 21
console.log(myAge < 21);
if(myAge < 21) {
    console.log("You are not eligible to drink.");
    console.log("You are going to be kicked out of the bar.");
}
else if (myAge == 21) {
    console.log("You are eligible for a discount!");
}
else {
    console.log("What can I get for you? We've got Heineken on tap!");
}