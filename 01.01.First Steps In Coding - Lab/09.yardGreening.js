function yardGreening(input){
    let area = Number(input[0]);
    let price = area * 7.61;
    let discount = price * 0.18;
    let totalPrice = price - discount;
    let final = `The final price is: ${totalPrice} lv.`;
    let final2 = `The discount is: ${discount} lv.`;
    console.log(final);
    console.log(final2);
    
}
yardGreening(["150"]);