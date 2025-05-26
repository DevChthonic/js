// AND OPERATOR &&

// Condition #1 - If it is sunny
// Condition #2 - If it is at least 70 degrees

// If condition #1 AND condition #2 is met
// then we will go to the park

// and is a logical operator
// in order for this condition to be true, both expressions must be true
// AND is also known as a conjuction
// truth value of going to the park is going to depend on both of the other true value expressions

// TRUTH TABLE

/**
 * A B / A AND B
 * --- / ---
 * T T /  T
 * T F /  F
 * F T /  F
 * F F /  F
 */

let myAge = 16;
let minAge = 21;
// && = AND operator
if(myAge >= 18 && minAge <= 21) {
    console.log("I'm valid.");
} else {
    console.log("Not valid.");
}

// OR OPERATOR || 

// Condition #1 - If it is sunny
// Condition #2 - If it is at least 70 degrees

// If condition #1 OR condition #2 is met
// then we will go to the park

// TRUTH TABLE

/**
 * A B / A OR B
 * --- / ---
 * T T /  T
 * T F /  T
 * F T /  T
 * F F /  F
 */

let isSunny = false;
let isWarm = false;

if(isSunny || !isWarm) {
    console.log("We're going to the park");
} else {
    console.log("We're not going to the park");
}

// NOT OPERATOR !

// The NOT operator negates an expression
