/*
Literals are fixed values.
Dev will always be Dev.
29 will always be 29.
Variables may change over time (unless declared as a constant).
myName holds the value "Dev", but it may change overtime (user decides to update their profile name).
We've only assigned literal values to our declared variables.
You cannot change the value of a literal.
*/

console.log("My name is ");
// This is a string literal. The "My name is " string never changes.

var firstName = "Dev", lastName = "Chthonic";
console.log("My name is " + firstName + " " + lastName + ".");

/*
Here I have defined values for the firstName and lastName variables.
Then I have asked the interpreter to log the output of a concatenated statement.
The concatenated statement includes "My name is " plus firstName plus " " (a space) plus lastName plus "." (a period)
The combined output is:
// My name is Dev Chthonic.
*/
