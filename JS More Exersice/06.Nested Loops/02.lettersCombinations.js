function lettersCombinations(input){
    let firstLett = input[0].charCodeAt();
    let lastLett = input[1].charCodeAt();
    let missedLett = input[2].charCodeAt();
    let result = "";
    let count = 0;

    for(let i = firstLett; i <= lastLett; i++){
        if(i === missedLett){
            continue;
        }
        for(let j = firstLett; j <= lastLett; j++){
            if(j === missedLett){
                continue;
            }
            for(let k = firstLett; k <= lastLett; k++){
                if(k === missedLett){
                    continue;
                }
                result += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " ";
                count++;
            }
        }
    }
    result += count;
    console.log(result);
}
lettersCombinations(["a", "c", "b"])