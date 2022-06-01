function secretDoorsLock(input){
    let hundreds = Number(input[0]);
    let tens = Number(input[1]);
    let units = Number(input[2]);


    for(let i = 2; i <= hundreds; i += 2){
        for(let j = 2; j <= tens; j++){
            let isPrime = true;
            for(let k = 2; k <= j / 2 + 1; k++){
                if(j % k === 0 && j !== 2){
                    isPrime = false;
                    break;
                }
            }
            for(let l = 2; l <= units; l += 2){
                if(!isPrime){
                    break;
                }
                console.log(`${i} ${j} ${l}`);
            }
        }
    }
}
secretDoorsLock(["3", "5", "5"])