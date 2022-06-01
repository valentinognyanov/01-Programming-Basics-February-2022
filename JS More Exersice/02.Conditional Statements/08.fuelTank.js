function fuelTank(input){
    let typeFuel = input[0];
    let liters = Number(input[1]);
    switch(typeFuel){
        case "Diesel":
        case "Gasoline":
        case "Gas":
        if (liters >= 25){
            console.log(`You have enough ${typeFuel.toLowerCase(0)}.`);
        } else if (liters < 25){
            console.log(`Fill your tank with ${typeFuel.toLowerCase(0)}!`);
        }
        break;
        default:
            console.log("Invalid fuel!")
    }
}
fuelTank(["Gas","14"])