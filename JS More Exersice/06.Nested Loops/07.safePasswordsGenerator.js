function safePasswordsGenerator(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let maxPass = Number(input[2]);

    let passCounter = 0;
    let symbol1 = 35;
    let symbol2 = 64;
    let result = "";

    for(let symbol3 = 1; symbol3 <= n1; symbol3++){
        for(let symbol4 = 1; symbol4 <= n2; symbol4++){
            let symbol1Code = String.fromCharCode(symbol1);
            let symbol2Code = String.fromCharCode(symbol2);
            result += `${symbol1Code}${symbol2Code}${symbol3}${symbol4}${symbol2Code}${symbol1Code}|`;
            passCounter++;
            if(passCounter >= maxPass){
                console.log(result);
                return;
            }
            symbol1++;
            if(symbol1 > 55){
                symbol1 = 35;
            }
            symbol2++;
            if(symbol2 > 96){
                symbol2 = 64;
            }
        }
    }
    console.log(result);
}
safePasswordsGenerator(["2", "3", "10"])