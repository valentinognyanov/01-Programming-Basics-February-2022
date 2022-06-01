function cinema(input){
    let projection = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    
    let seats = r * c;
    let income = 0;
    //Premiere Normal Discount
    if (projection === "Premiere"){
        income = seats * 12;
        console.log(income.toFixed(2));
    } else if (projection === "Normal"){
        income = seats * 7.5;
        console.log(income.toFixed(2));
    } else if (projection === "Discount"){
        income = seats * 5;
        console.log(income.toFixed(2));
    }
}
cinema(["Discount",
"12",
"30"])
