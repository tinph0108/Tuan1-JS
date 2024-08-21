function printForecast(arr) {
    let forecastStr = '';
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `${arr[i]} C in ${i + 1} days ... `;
    }
    console.log('...' + forecastStr);
}

// Data 1
const data1 = [17, 21, 23];
printForecast(data1);

// Data 2
const data2 = [12, 5, -5, 0, 4];
printForecast(data2);
