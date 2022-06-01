function averageNumber(input){
    let index = 0;
    let num = Number(input[index++]);
    let sum = 0;

    for(let i = 0; i < num; i++){
        currentNum = Number(input[index++]);
        sum += currentNum
    }
    let avg = sum / num;
    console.log(avg.toFixed(2));
}
averageNumber(["2", "6", "4"]);