function happyCatParking(input){
    let days = Number(input[0]);
    let hours = Number(input[1]);

    let totalSum = 0;
    let currSum = 0;

    for(let i = 1; i <= days; i++){
        for(let j = 1; j <= hours; j++){
            if(i % 2 === 0 && j % 2 != 0){
                currSum += 2.50;
                totalSum += 2.50;
            } else if(i % 2 != 0 && j % 2 === 0){
                currSum += 1.25;
                totalSum += 1.25;
            } else {
                currSum += 1;
                totalSum += 1;
            }
        }
        console.log(`Day: ${i} - ${currSum.toFixed(2)} leva`);
        currSum = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
happyCatParking(["2", "5"])