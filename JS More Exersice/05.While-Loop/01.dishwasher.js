function dishwasher(input){
    let index = 0;
    let bottleCount = Number(input[index++]);
    let command = input[index++];

    let bottle = 750;
    let dishesConsume = 5;
    let potsConsume = 15;
    let counter = 1;
    let totalMlDetergent = bottleCount * bottle

    let detergentDishes = 0;
    let detergentPots = 0;
    let detergentTotal = 0;
    let dishesCount = 0;
    let potsCount = 0;

    while(command !== "End"){
        let dishes = Number(command);
        if(counter % 3 === 0){
            detergentPots = dishes * potsConsume;
            totalMlDetergent -= detergentPots;
            potsCount += dishes;
            detergentTotal = detergentPots;
        } else {
            detergentDishes = dishes * dishesConsume;
            totalMlDetergent -= detergentDishes;
            dishesCount += dishes;
            detergentTotal = detergentDishes;
        }

        if(totalMlDetergent < 0){
            console.log(`Not enough detergent, ${Math.abs(totalMlDetergent)} ml. more necessary!`);
            return;
        }
        command = input[index++];
        counter++;

    }
    if(totalMlDetergent >= 0){
        console.log(`Detergent was enough!`);
        console.log(`${dishesCount} dishes and ${potsCount} pots were washed.`);
        console.log(`Leftover detergent ${totalMlDetergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(totalMlDetergent)} ml. more necessary!`);
    }

}
dishwasher(["2","53","65","55","End"]);