function specialNumbers(input){
    let num = Number(input[0]);
    let buff = ""

    for(let i = 1; i < 10; i++){
        for(let j = 1; j < 10; j++){
            for(let k = 1; k < 10; k++){
                for(let l = 1; l < 10; l++){
                    if(num % i === 0 && num % j === 0 && num % k === 0 && num % l === 0){
                        buff += "" + i + j + k + l + " ";
                    }
                }
            }
        }
    }
    console.log(buff)
}
specialNumbers(["3"]);