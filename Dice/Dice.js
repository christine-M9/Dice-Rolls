function expectedRolls(remembered, forgotten, average) {
    let totalRolls = remembered.length + forgotten;
    let rememberedTotal = remembered.reduce((total, roll) => total + roll, 0);
    let averageTotal = average * totalRolls;
    let missingTotal = averageTotal - rememberedTotal;
   

    if (forgotten === 0) {
        if (average !== rememberedTotal / remembered.length) {
            return [0];
        } else {
            return Array(forgotten).fill(average);
        }
    }

    if (missingTotal > forgotten * 6 || missingTotal < forgotten) {
        return [0];
    }

    if (totalRolls < remembered.length) {
        return [0];
    }

    
    let outcome = [];
    for (let i = 1; i <= 6; i++) {
        if (missingTotal - i >= 1 && missingTotal - i <= 6) {
            outcome.push(i);
        }
    }
    if (outcome.length > 0) {
        return outcome;
    }
     else {
        return [0];
    }
}



console.log(expectedRolls([3, 2, 4, 3], 2, 4));  
console.log(expectedRolls([1, 5, 6], 4, 3));  
console.log(expectedRolls([1, 2, 3, 4], 4, 6));  
console.log(expectedRolls([6, 1], 1, 1));  
console.log(expectedRolls([6], 10, 4));  
