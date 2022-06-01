function passwordGenerator(input){
    let n = Number(input[0]);
    let l = Number(input[1]);

    let startLetter = 97;
    let validCombinations = "";
    let totalCombinations = "";

    for(let a = 1; a < n; a++){
        for(let b = 1; b < n; b++){
            for(let c = startLetter; c < startLetter + l; c++){
                for(let d = startLetter; d < startLetter + l; d++){
                    for(let e = 2; e <= n; e++){
                        if(e > a && e > b){
                            let strC = String.fromCharCode(c);
                            let strD = String.fromCharCode(d);
                            validCombinations = "" + a + b + strC + strD + e;
                            totalCombinations += validCombinations + " ";
                        }
                    }
                }
            }
        }
    }
    if(totalCombinations !== ""){
        console.log(totalCombinations);
    }
}
passwordGenerator(["2", "4"]);