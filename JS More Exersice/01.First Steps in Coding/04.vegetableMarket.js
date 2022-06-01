function vegetableMarket(input){
    let vegesPricePerKilo = Number(input[0]);
    let fruitPricePerKilo = Number(input[1]);
    let vegesTotalKilo = Number(input[2]);
    let fruitTotalKilo = Number(input[3]);

    let vegesTotalSum = vegesPricePerKilo * vegesTotalKilo;
    let fruitTotalSum = fruitPricePerKilo * fruitTotalKilo;
    let totalSumInLeva = vegesTotalSum + fruitTotalSum;
    let totalSumInEuro = totalSumInLeva / 1.94;

    console.log(totalSumInEuro.toFixed(2));

}
vegetableMarket(["0.194", "19.4", "10", "10"])