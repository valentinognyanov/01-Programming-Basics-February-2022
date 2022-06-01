function skiTrip(input){
    let daysStay = Number(input[0]);
    let typeRoom = input[1];
    let evaluation = input[2];

    let totalSum = 0;
    switch (typeRoom){
        case "room for one person":
            totalSum = (daysStay - 1) * 18;
            break;
        case "apartment":
            totalSum = (daysStay - 1) * 25;
            if (daysStay < 10){
                totalSum = totalSum * 0.7;
            } else if (daysStay >= 10 && daysStay <= 15){
                totalSum = totalSum * 0.65;
            } else {
                totalSum = totalSum * 0.5;
            }
            break;
        case "president apartment":
            totalSum = (daysStay - 1) * 35;
            if (daysStay < 10){
                totalSum = totalSum * 0.9;
            } else if (daysStay >= 10 && daysStay <= 15){
                totalSum = totalSum * 0.85;
            } else {
                totalSum = totalSum * 0.8;
            }
            break;
    }
    if (evaluation === "positive"){
        totalSum = totalSum * 1.25;
    } else if (evaluation === "negative"){
        totalSum = totalSum * 0.9;
    }
    console.log(totalSum.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])
