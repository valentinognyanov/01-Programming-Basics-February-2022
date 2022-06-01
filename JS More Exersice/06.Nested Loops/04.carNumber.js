function carNumber(input){
    let start = Number(input[0]);
    let end = Number(input[1]);

    let result = "";

    for(let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            for(let k = start; k <= end; k++){
                for(let l = start; l < i; l++){
                    if(i > l){
                        if(i % 2 === 0){
                            if(l % 2 != 0){
                                if((i - l) % 2 != 0 && (j + k) % 2 === 0){
                                    result += `${i}${j}${k}${l} `;
                                }
                            }
                        } else {
                            if(l % 2 === 0){
                                if(i % 2 != 0){
                                    if((i - l) % 2 != 0 && (j + k) % 2 === 0){
                                        result += `${i}${j}${k}${l} `;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result)
}
carNumber([2, 3]);