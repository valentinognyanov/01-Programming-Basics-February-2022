function multiplyBy2(input){
    index = 0;
    let num = Number(input[index]);
    let res = 0;
    while(num > 0){
        let num = Number(input[index]);
        res = num * 2;
        if(num < 0){
            console.log("Negative number!");
            break;
    }
    index++;
    console.log(`Result: ${res.toFixed(2)}`);
    }
}
multiplyBy2(["12","43.2144","12.3","543.23","-20","3"]);