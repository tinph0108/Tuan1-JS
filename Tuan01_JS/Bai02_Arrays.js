function calcAverageHumanAge(ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    
    const adults = humanAges.filter(age => age >= 18);
    
    const averageHumanAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    
    return averageHumanAge;
  }
  
  const data1 = [5, 2, 4, 1, 15, 8, 3];
  const data2 = [16, 6, 10, 5, 6, 1, 4];
  
  console.log(calcAverageHumanAge(data1)); 
  console.log(calcAverageHumanAge(data2)); 