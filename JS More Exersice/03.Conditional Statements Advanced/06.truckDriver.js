function truckDriver(input){
    let index = 0;
    let season = input[index];
    index++;
    let kilometersForOneMonth = Number(input[index]);
    index++;

    let totalKm = kilometersForOneMonth * 4;
    let kilometersSum = 0;

    switch(season){
        case "Spring":
        case "Autumn":
            if(kilometersForOneMonth <= 5000){
                kilometersSum = kilometersForOneMonth * 0.75;
            }else if(kilometersForOneMonth <= 10000){
                kilometersSum = kilometersForOneMonth * 0.95;
            }
            break;
        case "Summer":
            if(kilometersForOneMonth <= 5000){
                kilometersSum = kilometersForOneMonth * 0.9;
            }else if(kilometersForOneMonth <= 10000){
                kilometersSum = kilometersForOneMonth * 1.1;
            }
            break;
        case "Winter":
            if(kilometersForOneMonth <= 5000){
                kilometersSum = kilometersForOneMonth * 1.05;
            }else if(kilometersForOneMonth <= 10000){
                kilometersSum = kilometersForOneMonth * 1.25;
            }
            break;
    }
    if(kilometersForOneMonth > 10000 && kilometersForOneMonth <= 20000){
        kilometersSum = kilometersForOneMonth * 1.45;
    }

    let totalSum = (kilometersSum * 4) * 0.9;
    console.log(totalSum.toFixed(2));
}
truckDriver(["Summer","3455"]);