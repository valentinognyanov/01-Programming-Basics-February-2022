function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegiMenu = Number(input[2]);
    let chickenSum = chickenMenu * 10.35;
    let fishSum = fishMenu * 12.4;
    let vegiSum = vegiMenu * 8.15;
    let sumWithoutDesert = chickenSum + fishSum + vegiSum;
    let desertSum = sumWithoutDesert * (20/100);
    let totalSum = sumWithoutDesert + desertSum + 2.5;
    console.log(totalSum);

}
foodDelivery(["2","4","3"]);