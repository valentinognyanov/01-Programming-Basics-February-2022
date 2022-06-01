function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extraCount = Number(input[1]);
    let clothingPrice = Number(input[2]);
    
    let decorPrice = budget * 0.1;
    
    let clothing = extraCount * clothingPrice;

    if (extraCount > 150){
        clothing = clothing * 0.9;

    } 
    let totalSum = decorPrice + clothing;
    let diff = Math.abs(totalSum - budget);
    
    if (totalSum > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["20000",
"120",
"55.5"])
