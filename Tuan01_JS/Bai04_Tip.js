let bill1 = 275
let bill2 = 40
let bill3 = 430

let tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2
let tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2
let tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2

console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`)
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`)
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`)
