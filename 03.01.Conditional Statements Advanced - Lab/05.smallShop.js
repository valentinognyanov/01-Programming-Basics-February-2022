function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    
    let sum = 0;
    if (city === "Sofia"){
        if (product === "coffee"){
            sum = quantity * 0.5;
        } else if (product === "water") {
            sum = quantity * 0.8;
        } else if (product === "beer") {
            sum = quantity * 1.2;
        } else if (product === "sweets") {
            sum = quantity * 1.45;
        } else if (product === "peanuts") {
            sum = quantity * 1.6;
        }
    } else if (city === "Plovdiv"){
        if (product === "coffee"){
            sum = quantity * 0.4;
        } else if (product === "water") {
            sum = quantity * 0.7;
        } else if (product === "beer") {
            sum = quantity * 1.15;
        } else if (product === "sweets") {
            sum = quantity * 1.30;
        } else if (product === "peanuts") {
            sum = quantity * 1.5;
        }
    } else if (city === "Varna"){
        if (product === "coffee"){
            sum = quantity * 0.45;
        } else if (product === "water") {
            sum = quantity * 0.7;
        } else if (product === "beer") {
            sum = quantity * 1.1;
        } else if (product === "sweets") {
            sum = quantity * 1.35;
        } else if (product === "peanuts") {
            sum = quantity * 1.55;
        }
    }
    console.log(sum);

}
smallShop(["beer",
"Sofia",
"2"])


