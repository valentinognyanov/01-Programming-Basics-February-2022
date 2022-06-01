function harvest(input){
    let squareMtr = Number(input[0]);
    let kiloGrapeFromOneSquaqreMtr = Number(input[1]);
    let neededLitreWine = Number(input[2]);
    let workers = Number(input[3]);
    
    let totalKilosGrape = kiloGrapeFromOneSquaqreMtr * squareMtr;
    let grapeForWine = (totalKilosGrape * 0.4) / 2.5;
    let diff = Math.abs(grapeForWine - neededLitreWine);
    if (grapeForWine < neededLitreWine){
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
    } else if (grapeForWine >= neededLitreWine){
        let winePerWorker = diff / workers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(grapeForWine)} liters.`)
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }

}
harvest(["1020","1.5","425","4"]);