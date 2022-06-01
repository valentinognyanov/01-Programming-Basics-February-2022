function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let typeVacation = "";
    let destination = "";
    let spendedMoney = 0;

    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "summer"){
            spendedMoney = budget * 0.3;
            typeVacation = "Camp"
        } else if (season === "winter"){
            spendedMoney = budget * 0.7;
            typeVacation = "Hotel"
        }
    } else if (budget <= 1000){
        destination = "Balkans";
        if (season === "summer"){
            spendedMoney = budget * 0.4;
            typeVacation = "Camp";
        } else if (season === "winter"){
            spendedMoney = budget * 0.8;
            typeVacation = "Hotel";
        }
    } else if (budget > 1000){
        destination = "Europe";
        spendedMoney = budget * 0.9;
        typeVacation = "Hotel"       
        }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeVacation} - ${spendedMoney.toFixed(2)}`)
}
journey(["312", "summer"])
