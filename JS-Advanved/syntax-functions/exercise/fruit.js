function solve(fruit, weight,pricePerKg){

    let weightInKg = weight / 1000;

    let moneyNeeded = weightInKg * pricePerKg;
    

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}

solve('apple',2500,1.80);