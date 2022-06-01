function bills(input){
    let index = 0;
    let months = Number(input[index++]);

    let wather = 20;
    let internet = 15;
    let electricityTotal = 0;
    let otherBills = 0;

    for(let i = 0; i < months; i++){
        let electricity = Number(input[index++]);
        electricityTotal += electricity;
        otherBills += (electricity + wather + internet) * 1.2;

    }
    let watherTotal = wather * months;
    let internetTotal = internet * months;
    let averageTotal = (electricityTotal + watherTotal + internetTotal + otherBills) / months;

    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${watherTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${otherBills.toFixed(2)} lv`);
    console.log(`Average: ${averageTotal.toFixed(2)} lv`);
}
bills(["5","68.63","89.25","132.53","93.53","63.22"]);