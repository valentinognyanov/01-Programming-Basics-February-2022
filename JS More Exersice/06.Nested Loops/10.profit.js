function profit(input){
    let coinsOf1lv = Number(input[0]);
    let coinsOf2lv = Number(input[1]);
    let billsOf5lv = Number(input[2]);
    let sum = Number(input[3]);

    for(let i = 0; i <= coinsOf1lv; i++){
        for(let j = 0; j <= coinsOf2lv; j++){
            for(let k = 0; k <= billsOf5lv; k++){
                if(i * 1 + j * 2 + k * 5 === sum){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit(["3", "2", "3", "10"]);