function toyShop(input){
    let price = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toyCount = puzzels + dolls + bears + minions + trucks;
    let toysPrice = (puzzels * 2.6) + (dolls * 3) + (bears * 4.1) + (minions * 8.2) + (trucks * 2);

    if (toyCount >= 50){
        toysPrice = toysPrice * 0.75;
    }

    toysPrice = toysPrice * 0.9;

    let diff = Math.abs(price - toysPrice);
    
    if (price <= toysPrice){

        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}