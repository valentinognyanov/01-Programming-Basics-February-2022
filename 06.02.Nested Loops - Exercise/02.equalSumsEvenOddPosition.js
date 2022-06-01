function equalSumsEvenOddPosition(input){
    let firstNum = Number(input[0]);
    let secoundNum = Number(input[1]);

    let printLine = ``;
    for(let i = firstNum; i <= secoundNum; i++){
        let currentNum = "" + i;
        let oddNum = 0;
        let evenNum = 0;
        for(let j = 0; j <= currentNum.length; j++){
            let currentDigit = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                evenNum += currentDigit;
            } else {
                oddNum += currentDigit;
            }
        }
        if(oddNum === evenNum){
            printLine += `${i} `;
        }
    }
    console.log(printLine);    
}
equalSumsEvenOddPosition(["100000", "100050"]);