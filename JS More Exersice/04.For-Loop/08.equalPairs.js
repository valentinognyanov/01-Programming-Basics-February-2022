function equalPairs(input){
    let index = 0;
    let pairs = Number(input[index++]);

    let firstSum = 0;
    let midSum = 0;
    let check = true;
    let diff = 0;

    for(let i = 0; i < pairs; i++){
        let n1 = Number(input[index++]);
        let n2 = Number(input[index++]);
        
        if(i % 2 == 0){
            firstSum = n1 + n2;
        } else {
            midSum = n1 + n2;
        }

        if(firstSum == midSum || pairs < 2){
            check = true;
        } else {
            diff = Math.abs(midSum - firstSum);
            check = false;
        }
    }
    if(check){
        console.log(`Yes, value=${firstSum}`);
    } else {
        console.log(`No, maxdiff=${diff}`);
    }
}
equalPairs(["3","1","2","0","3","4","-1"]);