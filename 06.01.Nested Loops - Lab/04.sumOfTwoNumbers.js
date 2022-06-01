function sumOfTwoNumbers(input){
    let index = 0;
    let start = Number(input[index++]);
    let finish = Number(input[index++]);
    let magicNumber = Number(input[index++]);
    let combination = 0;

    let flag = false;
    for(let i = start; i <= finish; i++){
        for(let j = start; j <= finish; j++){
            combination++;
            let sum = i + j;
            if(sum == magicNumber){
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNumber})`)
                flag = true;
                break;
            }
        }

        if(flag){
            break;
        }
    }

    if(!flag){
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["23", "24", "20"]);