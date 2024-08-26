function checkDogs(dogsJulia, dogsKate) {
    const correctedJulia = dogsJulia.slice(1, -2);
    

    const allDogs = correctedJulia.concat(dogsKate);
    
    allDogs.forEach(function (age, index) {
      const type = age >= 3 ? 'adult' : 'puppy';
      console.log(`Dog number ${index + 1} is an ${type}, and is ${age} years old`);
    });
  }
  
  const data1Julia = [3, 5, 2, 12, 7];
  const data1Kate = [4, 1, 15, 8, 3];
  const data2Julia = [9, 16, 6, 8, 3];
  const data2Kate = [10, 5, 6, 1, 4];
  
  checkDogs(data1Julia, data1Kate);
  checkDogs(data2Julia, data2Kate);