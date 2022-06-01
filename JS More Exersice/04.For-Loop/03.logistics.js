function logistics(input){
    let index = 0;
    let cargoCount = Number(input[index++]);

    let busCargo = 0;
    let truckCargo = 0;
    let trainCargo = 0
    let priceBus = 0;
    let priceTruck = 0;
    let priceTrain = 0;
    let sumCargo = 0;
    let avgMoney = 0;
    let busPersentage = 0;
    let truckPersentage = 0;
    let trainPersentage = 0;

    for(let i = 0; i < cargoCount; i++){
        let cargoWieght = Number(input[index++]);
        if(cargoWieght <= 3){
            busCargo += cargoWieght;
            priceBus = busCargo * 200;
        } else if(cargoWieght <= 11){
            truckCargo += cargoWieght;
            priceTruck = truckCargo * 175;
        } else if(cargoWieght > 11){
            trainCargo += cargoWieght;
            priceTrain = trainCargo * 120
        }
        sumCargo = busCargo + truckCargo + trainCargo;
        avgMoney = (priceBus + priceTruck + priceTrain) / sumCargo;

    }
    busPersentage = busCargo / sumCargo * 100;
    truckPersentage = truckCargo / sumCargo * 100;
    trainPersentage = trainCargo / sumCargo * 100;
    
    console.log(avgMoney.toFixed(2));
    console.log(`${busPersentage.toFixed(2)}%`);
    console.log(`${truckPersentage.toFixed(2)}%`);
    console.log(`${trainPersentage.toFixed(2)}%`);
}
logistics(["5","2","10","20","1","7"]);