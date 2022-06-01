function grandpaStavri(input){
    let index = 0;
    let n = Number(input[index++]);

    let liter = 0;
    let degrees = 0;
    let totalLiters = 0;
    let totalDegrees = 0;
    let drink = 0;
    let result = "";

    for(let i = 0; i < n; i++){
        liter = Number(input[index++]);
        degrees = Number(input[index++]);
        drink += liter * degrees;
        totalLiters += liter;
    }
    totalDegrees = drink / totalLiters
    if(totalDegrees < 38){
        result = "Not good, you should baking!"; 
    } else if(totalDegrees <= 42 && totalDegrees >= 38){
        result = "Super!";
    } else {
        result = "Dilution with distilled water!";
    }
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${totalDegrees.toFixed(2)}`);
    console.log(result);
}
grandpaStavri(["3", "100", "45", "50", "55", "150", "36"]);