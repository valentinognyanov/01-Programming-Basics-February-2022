function courierExpress(input){
    let weightOfPackage = Number(input[0]);
    let typeOfDelivery = input[1];
    let distanceInKm = Number(input[2]);

    let pricePerKm = 0;
    let markupSum = 0;
    let totalMarkup = 0;

    if(typeOfDelivery === "standard"){
        if(weightOfPackage < 1){
            pricePerKm += 0.03;
        } else if(weightOfPackage < 10){
            pricePerKm += 0.05;
        } else if(weightOfPackage < 40){
            pricePerKm += 0.1;
        } else if(weightOfPackage < 90){
            pricePerKm += 0.15;
        } else if(weightOfPackage < 150){
            pricePerKm += 0.2;
        }
    } else if(typeOfDelivery === "express"){
        if(weightOfPackage < 1){
            pricePerKm += 0.03;
            markupSum += 0.03 * 0.8;
        } else if(weightOfPackage < 10){
            pricePerKm += 0.05;
            markupSum += 0.05 * 0.4;
        } else if(weightOfPackage < 40){
            pricePerKm += 0.1;
            markupSum += 0.1 * 0.05;
        } else if(weightOfPackage < 90){
            pricePerKm += 0.15;
            markupSum += 0.15 * 0.02;
        } else if(weightOfPackage < 150){
            pricePerKm += 0.2;
            markupSum += 0.2 * 0.01;
        }
        totalMarkup = markupSum * weightOfPackage;
    }
    

    let totalSum = distanceInKm * pricePerKm;
    if(typeOfDelivery === "standard"){
        console.log(`The delivery of your shipment with weight of ${weightOfPackage.toFixed(3)} kg. would cost ${totalSum.toFixed(2)} lv.`);
    } else if(typeOfDelivery === "express"){
        let totalSumWithMarkup = (totalMarkup * distanceInKm) + totalSum;
        console.log(`The delivery of your shipment with weight of ${weightOfPackage.toFixed(3)} kg. would cost ${totalSumWithMarkup.toFixed(2)} lv.`)
    }
}
courierExpress(["87", "express", "130"]);