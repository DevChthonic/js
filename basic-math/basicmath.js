var hourlyRate = 150.45;
var hoursWorked = 37.50;

/*
Here I've defined two variables.
hourlyRate
hoursWorked
*/

var weeklyEarnings = hourlyRate * hoursWorked;
console.log("Your weekly gross earnings are: $" + weeklyEarnings);

/*
Here I've defined a new variable and assigned it the value of hourlyRate multipled by hoursWorked.
I've also console logged the string literal "Your weekly gross pay is: $" and the weeklyEarnings variable.
*/

// console.log(typeof "Your weekly gross earnings are: $" + weeklyEarnings);
// Here I've used the typeof operator to declare the typeof this concatenated string.

var overtimeHours = 10;

var totalHoursWorked = hoursWorked + overtimeHours;
console.log(totalHoursWorked);

var overtimeRate = (hourlyRate/2) + hourlyRate;
console.log("Overtime Rate: $" + overtimeRate);
// Here we are gathering the overtimeRate by dividing the hourlyRate by 2 and then adding the hourlyRate.
// This is because the overtime rate is time and a half. We are doing half plus whole to generate this number.
// Then we are console logging the output of overtimeRate.

var totalOvertimeEarnings = overtimeHours * overtimeRate;
console.log("Total Overtime Earnings: $" + totalOvertimeEarnings);

var totalWeeklyEarnings = weeklyEarnings + totalOvertimeEarnings;
console.log("Total Pretax Weekly Earnings are: $" + totalWeeklyEarnings);

var taxRate = "33%"
console.log("Tax Rate is: $" + taxRate);

const TAX_MULTIPLIER = 0.33;
var totalTax = totalWeeklyEarnings * TAX_MULTIPLIER;
var totalEarnings = totalWeeklyEarnings - totalTax;
console.log("Total Posttax Weekly Earnings: $" + totalEarnings);

let x = 5;
let y = 2;

console.log(x % y);

// Saying 5 (x) "mod" 2 (y). Divide 5 by 2 and give me the remainder. 1

let a = 50;
let b = 2;

console.log(a % b);

// Saying 50 (a) "mod" 2 (b). Divide 50 by 2 and give me the remainder. 0

// The Distance Formula //

let x1 = 3;
let y1 = 4; // 3, 4

let x2 = 7;
let y2 = 13; // 7, 13

let deltaX = Math.pow(x2-x1, 2);
console.log(deltaX);

// We've got deltaX which is x2 - x1 squared

let deltaY = Math.pow(y2-y1, 2);
console.log(deltaY);

// We've got deltaY which is y2 - y1 squared

let sum = deltaX + deltaY;
console.log(sum);

// We've got (x2 - x1)squared + (y2 - y1)squared which is ouputted as sum

let distance = Math.sqrt(sum);
console.log("Distance: " + distance);

// Now we're logging the distance with Distance: + distance variable. 

// Distance: 9.848857801796104

// Random Number //

console.log(Math.random());

// We're logging the result of calling the random() method from the Math object.
// .random is a method (function) of the Math object.
// Math.random without parentheses references the function itself.
// Math.random() with parentheses calls and executes it.

console.log("Random number: " + Math.random());

// We're logging "Random number: " plus the result of Math.random().
// In this case, Math.random() **is being called** (note the parentheses), so we're executing it.

console.log("Random number: " + Math.random() * 100);

// We're logging "Random number: " plus the result of Math.random() multiplied by 100.
// This gives us a float between 0 and ~99.999...

console.log("Random number: " + Math.round(Math.random() * 100));

// We're logging "Random number: " plus the result of Math.round(...).
// Inside round(), we're calling Math.random(), multiplying the result by 100,
// and rounding to the nearest whole number between 0 and 100.

