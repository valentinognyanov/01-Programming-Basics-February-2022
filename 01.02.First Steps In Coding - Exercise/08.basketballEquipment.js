function basketballEquipment(input){
    let annualBasketballMembership = Number(input[0]);
    let snickers = annualBasketballMembership - (annualBasketballMembership * (40/100));
    let jersey = snickers - (snickers * (20/100));
    let ball = jersey / 4;
    let accsesory = ball / 5;
    let totalSum = annualBasketballMembership + snickers + jersey + ball + accsesory;

    console.log(totalSum);
}
basketballEquipment(["365"]);