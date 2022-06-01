function oscars(input){
    let index = 0;
    let name = input[index];
    index++;
    let totalPoints = Number(input[index]);
    index++;
    let judges = Number(input[index]);
    index++;

    for(let i = 0; i < judges; i++){
        let judgeName = input[index];
        index++;
        let points = Number(input[index]);
        index++;

        let res = judgeName.length * points / 2;
        totalPoints += res;

        if(totalPoints > 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }
    }
    if(totalPoints <= 1250.5){
        let diff = Math.abs(totalPoints - 1250.5)
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
