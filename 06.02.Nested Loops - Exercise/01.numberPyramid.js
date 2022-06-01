function numberPyramid(input){
    let num = Number(input[0]);
    let printNum = 1;
    let isFinished = false;

    for(let i = 1; i <= num; i++){
        let buff = "";
        for(let j = 1; j <= i; j++){
            buff += printNum + " ";
            printNum++;
            if(printNum > num){
                isFinished = true;
                break;
            }
        }
        console.log(buff);
        if(isFinished){
            break;
        }
    }
}
numberPyramid([7]);