// Code Challenge #1

// Test data 1
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

// Test data 2
let markMass2 = 95;
let markHeight2 = 1.88;

let johnMass2 = 85;
let johnHeight2 = 1.76;

// Calculate BMI data 1
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

// Calculate BMI data 2
let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;

// Compare BMI data 1
let markHigherBMI = markBMI > johnBMI;

// Compare BMI data 2
let markHigherBMI2 = markBMI2 > johnBMI2;

// Print result data 1
console.log("Data Set 1: Mark's BMI:", markBMI, "John's BMI:", johnBMI, "Mark has a higher BMI:", markHigherBMI);
console.log("Data Set 2: Mark's BMI:", markBMI2, "John's BMI:", johnBMI2, "Mark has a higher BMI:", markHigherBMI2);
