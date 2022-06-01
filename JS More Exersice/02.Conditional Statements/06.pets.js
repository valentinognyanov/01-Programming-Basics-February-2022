function pets(input){
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogFoodDaily = Number(input[2]);
    let catFoodDaily = Number(input[3]);
    let turtleFoodDaily = Number(input[4]);

    let turtleFoodInKg = turtleFoodDaily / 1000;
    let totalFoodForOneDay = dogFoodDaily + catFoodDaily + turtleFoodInKg;
    let totalFood = totalFoodForOneDay * days;
    let diff = Math.abs(food - totalFood);

    if (totalFood <= food){
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else if (totalFood > food){
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }

}
pets(["5","10","2.1","0.8","321"])