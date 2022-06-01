function flowerShop(input){
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let presentPrice = Number(input[4]);

    let magnoliasSum = magnolias * 3.25;
    let hyacinthsSum = hyacinths * 4;
    let rosesSum = roses * 3.5;
    let cactusesSum = cactuses * 8;
    let totalSumWithoutTax = magnoliasSum + hyacinthsSum + rosesSum + cactusesSum;
    let totalSum = totalSumWithoutTax * 0.95;
    let diff = Math.abs(presentPrice - totalSum);

    if (totalSum >= presentPrice){
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }

}
flowerShop(["15","7","5","10","100"]);