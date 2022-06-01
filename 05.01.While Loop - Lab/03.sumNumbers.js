function sumNumbers(input){
    let index = 0;
    let number = Number(input[index]);
    index++;
    let sum = 0;

    while(true){
        let currentNums = Number(input[index]);
        index++;
        sum += currentNums;
        if(sum >= number){
            break;
        }
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
;