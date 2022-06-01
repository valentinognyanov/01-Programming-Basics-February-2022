function catDiet(input){
    let fatPercentage = Number(input[0]);
    let proteinPercentage = Number(input[1]);
    let carbohydratesPercentage = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercentage = Number(input[4]);

    let totalGmFat = (totalCalories * (fatPercentage / 100) / 9);
    let totalGmProtein = (totalCalories * (proteinPercentage / 100) / 4);
    let totalGmCarbohydrates = (totalCalories * (carbohydratesPercentage / 100) / 4);
    let totalFoodWeight = totalGmFat + totalGmProtein + totalGmCarbohydrates;
    let caloriesPerOneGmFood = totalCalories / totalFoodWeight;
    let waterPercentageinDm = waterPercentage / 100;
    let calories = caloriesPerOneGmFood - (caloriesPerOneGmFood * waterPercentageinDm);

    console.log(calories.toFixed(4));
}
catDiet(["60","25","15","2500","60"]);