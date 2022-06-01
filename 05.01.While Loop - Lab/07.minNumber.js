function minNumber(input){
    let index = 0;
    let n = Number(input[index]);
    index++;
    let min = Number.MAX_SAFE_INTEGER;

    while(n !== "Stop"){
        let num = Number(n);
        if(num < min){
            min = num
        }
        n = input[index];
        index++;
    }
    console.log(min);
}
minNumber(["100", "99", "80", "70", "Stop"]);