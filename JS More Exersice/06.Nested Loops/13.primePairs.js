function primePairs(input){
    let startFirstPair = Number(input[0]);
    let startSecondPair = Number(input[1]);
    let diffFirstPair = Number(input[2]);
    let diffSecondPair = Number(input[3]);

    for(let i = startFirstPair; i <= startFirstPair + diffFirstPair; i++){
        for(let j = startSecondPair; j <= startSecondPair + diffSecondPair; j++){
            let isFirstNumPrime = true;
            let isSecondNumPrime = true;
            for(let k = 2; k <= Math.sqrt(i); k++){
                if(i % k === 0){
                    isFirstNumPrime = false;
                    break;
                }
            }
            for(let k = 2; k <= Math.sqrt(j); k++){
                if(j % k === 0){
                    isSecondNumPrime = false;
                    break;
                }
            }
            if(isFirstNumPrime && isSecondNumPrime){
                console.log(`${i}${j}`);
            }
        }
    }
}
primePairs(["10", "20", "5", "5"]);