function depositCalculator(input){
    let depositPrice = Number(input[0]);
    let time = Number(input[1]);
    let percentagePerYear = Number(input[2]);

    let persentage = depositPrice * (percentagePerYear / 100);
    let intrestPerMonth = persentage / 12;
    let totalPrice = depositPrice + time * intrestPerMonth;
    console.log(totalPrice);

}
depositCalculator(["200","3","5.7"])