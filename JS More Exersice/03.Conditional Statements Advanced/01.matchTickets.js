function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let ticketSum = 0;
    switch(category){
        case "VIP":
            ticketPrice = 499.99;
            break;
        case "Normal":
            ticketPrice = 249.99;
            break;
    }
    if (people >= 1 && people <= 4){
        transportSum = budget * 0.75;
    } else if (people <= 9){
        transportSum = budget * 0.6;
    } else if (people <= 24){
        transportSum = budget * 0.5;
    } else if (people <= 49){
        transportSum = budget * 0.40;
    } else if (people > 50){
        transportSum = budget * 0.25;
    }
    let sumWithoutTransport = budget - transportSum;
    let ticketsSum = people * ticketPrice;
    let diff = Math.abs(sumWithoutTransport - ticketsSum);
    if (sumWithoutTransport >= ticketsSum){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else if (sumWithoutTransport < ticketsSum){
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
matchTickets(["1000", "Normal", "1"]);