// Get this value from process.argv
const arguments= process.argv.slice(2);
let billTotal = arguments[0];

// Default tip rate as a percentage value
const tipRate = 18;

// Do the deed
const tipAmount = billTotal * (tipRate / 100);

// Output the result
console.log(`tip is ${tipRate}% of $${billTotal}: $${tipAmount}`);