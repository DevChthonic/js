let daysWorked = 0;
console.log(daysWorked);
daysWorked++; // postfix mode
console.log(daysWorked);
++daysWorked; // prefix mode
console.log(daysWorked);

let y = 5;
let resultY = (y++ * 5) + 10; // postfix mode (++ after expression of y)
console.log(resultY);
console.log(y);

// resultY
// 0
// 1
// 2
// 35
// 6

let x = 5;
let resultX = (++x * 5) + 10 // prefix mode (++ before expression of x)
console.log(resultX);
console.log(x);

// resultX
// 0
// 1
// 2
// 40
// 6