function fuelTankPart2(input){
    let typeFuel = input[0];
    let liters = Number(input[1]);
    let discountCard = input[2];

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;
    let totalSum = 0;
    switch(discountCard){
        case "Yes":
            gasolinePrice = gasolinePrice - 0.18;
            dieselPrice = dieselPrice - 0.12;
            gasPrice = gasPrice - 0.08; 
            break;
        case "No":
            break;
    }
    switch(typeFuel){
        case "Gasoline":
            totalSum = liters * gasolinePrice;
            break;
        case "Diesel":
            totalSum = liters * dieselPrice;
            break;
        case "Gas":
            totalSum = liters * gasPrice;
            break;
    }
    if (liters >= 20 && liters <= 25){
        totalSum = totalSum * 0.92
    } else if (liters > 25){
        totalSum = totalSum * 0.9;
    }
    console.log(`${totalSum.toFixed(2)} lv.`);
}
fuelTankPart2(["Diesel","19","No"]);