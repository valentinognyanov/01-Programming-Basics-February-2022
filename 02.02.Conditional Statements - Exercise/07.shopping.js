function shopping(input){
    let budget = Number(input[0]);
    let countVCA = Number(input[1]);
    let countCPU = Number(input[2]);
    let countRAM = Number(input[3]);

    let sumVCA = countVCA * 250;
    let sumCPU = countCPU * (sumVCA * 0.35);
    let sumRAM = countRAM * (sumVCA * 0.1);
    let totalSum = sumVCA + sumCPU + sumRAM;
    if (countVCA > countCPU){
        totalSum = totalSum * 0.85;
    } 
    let diff = Math.abs(totalSum - budget);
    if (totalSum <= budget){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
    
}
shopping(["900",
"2",
"1",
"3"])

;