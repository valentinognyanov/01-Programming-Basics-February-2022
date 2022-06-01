function excursionSale(input){
    let index = 0;
    let countSeaHolydays = Number(input[index++]);
    let countMountainsholydays = Number(input[index++]);

    let seaHolydayPrice = 680;
    let mountainHolydayPrice = 499;
    let profit = 0;

    while(input.length > 0){
        let typeHolyday = input[index++];
        if(typeHolyday === "Stop" || (countSeaHolydays === 0 && countMountainsholydays === 0)){
            break;
        }
        if(typeHolyday.toLowerCase() === "sea" && countSeaHolydays > 0){
            profit += seaHolydayPrice;
            countSeaHolydays--;
        } else if(typeHolyday.toLowerCase() === "mountain" && countMountainsholydays > 0){
            profit += mountainHolydayPrice;
            countMountainsholydays--;
        }
    }
    if(countSeaHolydays === 0 && countMountainsholydays === 0){
        console.log(" Good job! Everything is sold.");
    }
    console.log(`Profit: ${profit} leva.`);
}
excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);