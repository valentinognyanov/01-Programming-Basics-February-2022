function accountBalance(input){
    let index = 0;
    let payment = Number(input[index]);
    index++;
    let totalSum = 0;

    while(payment !== "NoMoreMoney"){
        let amount = Number(payment);
        if(amount < 0){
            console.log("Invalid operation!");
            break;
        }
        totalSum += amount
        console.log(`Increase: ${amount.toFixed(2)}`);
        payment = input[index];
        index++;
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "-100", "NoMoreMoney"]);