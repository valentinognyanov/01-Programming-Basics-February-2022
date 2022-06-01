function cleverLily(input){
    let index = 0;
    let age = Number(input[index]);
    index++;
    let washingMachine = Number(input[index]);
    index++;
    let toyPrice = Number(input[index]);
    index++;

    let money = 0;
    let currentMoney = 10;
    let toyCount = 0;

    for(let i = 1; i <= age; i++){
        if (i % 2 === 0){
            money += currentMoney;
            currentMoney += 10;
            money--;
        } else {
            toyCount++;
        }
    }
    money += toyCount * toyPrice;
    let diff = Math.abs(money - washingMachine);
    if (money >= washingMachine){
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["10","170.00","6"]);