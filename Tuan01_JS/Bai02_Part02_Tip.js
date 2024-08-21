function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

var bills = [125, 555, 44];
var tips = [
    calcTip(bills[0]), 
    calcTip(bills[1]), 
    calcTip(bills[2])
];
var totals = [
    bills[0] + tips[0], 
    bills[1] + tips[1], 
    bills[2] + tips[2]
];

console.log(`Bill 1: ${bills[0]}, Tip: ${tips[0].toFixed(2)}, Total: ${totals[0].toFixed(2)}`);
console.log(`Bill 2: ${bills[1]}, Tip: ${tips[1].toFixed(2)}, Total: ${totals[1].toFixed(2)}`);
console.log(`Bill 3: ${bills[2]}, Tip: ${tips[2].toFixed(2)}, Total: ${totals[2].toFixed(2)}`);
