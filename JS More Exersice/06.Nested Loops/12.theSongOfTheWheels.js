function theSongOfTheWheels(input){
    let m = Number(input[0]);

    let magicNum = 0;
    let counter = 0;
    let validCombination = "";
    let totalCombinations = "";
    let flag = false;
    let pass = "";

    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            for(let k = 1; k <= 9; k++){
                for(let l = 1; l <= 9; l++){
                    magicNum = i * j + k * l;
                    if(i < j && k > l && magicNum === m){
                        counter++
                        validCombination = "" + i + j + k + l;
                        if(counter === 4){ 
                            flag = true;
                            pass = validCombination
                        }
                        totalCombinations += validCombination + " ";
                    }
                }
            }
        }
    }
    if(totalCombinations !== ""){
        console.log(totalCombinations);
    }
    if(flag){
        console.log(`Password: ${pass}`);
    } else{
        console.log("No!");
    }
}
theSongOfTheWheels(["11"]);