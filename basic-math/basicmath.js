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
