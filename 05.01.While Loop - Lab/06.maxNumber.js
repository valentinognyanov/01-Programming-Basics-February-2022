function maxNumber(input){
    let index = 0;
    let n = Number(input[index]);
    index++;
    let max = Number.MIN_SAFE_INTEGER;
    
    while(n !== "Stop"){
        let num = Number(n);
        if(num > max){
            max = num
        }
        n = input[index];
        index++;
    }
    console.log(max);
}
maxNumber(["100", "99101", "80", "70", "Stop"]);