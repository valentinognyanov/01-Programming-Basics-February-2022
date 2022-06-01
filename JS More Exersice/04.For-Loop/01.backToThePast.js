function backToThePast(input){
    let index = 0;
    let heritage = Number(input[index]);
    index++;
    let year = Number(input[index]);
    index++;
    let age = 17;

    for(let i = 1800; i < year + 1; i++){
        if(i % 2 == 0){
            age++;
            heritage -= 12000
        } else {
            age++;
            heritage -= 12000 + 50 * age;
        }
    }
    if(heritage >= 0){
        console.log(`Yes! He will live a carefree life and will have ${heritage.toFixed(2)} dollars left.`);
    } else {
        let neededMoney = Math.abs(heritage);
        console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["100000.15", "1808"]);