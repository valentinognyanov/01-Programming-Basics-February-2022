function pipesInPool(input){
    let volume = Number(input[0]);
    let firstDebit = Number(input[1]);
    let secondDebit = Number(input[2]);
    let hoursOfAbsence = Number(input[3]);
   
    let litersFromFirstDebit = firstDebit * hoursOfAbsence;
    let litersFromSecondDebit = secondDebit * hoursOfAbsence;
    let totalLitres = litersFromFirstDebit + litersFromSecondDebit;
    let percentage = (totalLitres / volume) * 100;
    let firstDebitPercentage = (litersFromFirstDebit / totalLitres) * 100;
    let secondDebitPercentage = (litersFromSecondDebit / totalLitres) * 100;
    let overFlow = totalLitres - volume;
 
    if (totalLitres <= volume){
        console.log(`The pool is ${percentage.toFixed(2)}% full. 
        Pipe 1: ${firstDebitPercentage.toFixed(2)}%. Pipe 2: ${secondDebitPercentage.toFixed(2)}%.`);
    } else if (totalLitres > volume){
        console.log(`For ${hoursOfAbsence} hours the pool overflows with ${overFlow.toFixed(2)} liters.`);
    }

}
pipesInPool(["1000","100","120","3"]);