function gameOfIntervals(input){
    let index = 0;
    let turns = Number(input[index++]);

    let result = 0;
    let nums0to9 = 0;
    let nums10to19 = 0;
    let nums20to29 = 0;
    let nums30to39 = 0;
    let nums40to50 = 0;
    let invalidNums = 0;
    let nums0to9Percentage = 0;
    let nums10to19Percentage = 0;
    let nums20to29Percentage = 0;
    let nums30to39Percentage = 0;
    let nums40to50Percentage = 0;
    let invalidNumsPercentage = 0;
    

    for(let i = 0; i < turns; i++){
        let numbers = Number(input[index++]);
        if(numbers >= 0 && numbers <= 9){
            nums0to9++;
            result += numbers * 0.2;
        } else if(numbers >= 10 && numbers <= 19){
            nums10to19++;
            result += numbers * 0.3;
        } else if(numbers >= 20 && numbers <= 29){
            nums20to29++;
            result += numbers * 0.4;
        } else if(numbers >= 30 && numbers <= 39){
            nums30to39++;
            result += 50;
        } else if(numbers >= 40 && numbers <= 50){
            nums40to50++;
            result += 100;
        } else if(numbers < 0 || numbers > 50){
            invalidNums++;
            result = result / 2;
        }
    }
    nums0to9Percentage = (nums0to9 / turns) * 100;
    nums10to19Percentage = (nums10to19 / turns) * 100;
    nums20to29Percentage = (nums20to29 / turns) * 100;
    nums30to39Percentage = (nums30to39 / turns) * 100;
    nums40to50Percentage = (nums40to50 / turns) * 100;
    invalidNumsPercentage = (invalidNums / turns) * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${nums0to9Percentage.toFixed(2)}%`);
    console.log(`From 10 to 19: ${nums10to19Percentage.toFixed(2)}%`);
    console.log(`From 20 to 29: ${nums20to29Percentage.toFixed(2)}%`);
    console.log(`From 30 to 39: ${nums30to39Percentage.toFixed(2)}%`);
    console.log(`From 40 to 50: ${nums40to50Percentage.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumsPercentage.toFixed(2)}%`);
}
gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"]);