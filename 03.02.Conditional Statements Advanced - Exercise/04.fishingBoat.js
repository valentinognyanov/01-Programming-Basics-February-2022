function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);

    let boatCoast = 0;
    switch (season){
        case "Spring":
            boatCoast = 3000;
            if (fisherman <= 6){
                boatCoast = boatCoast * 0.9
            } else if (fisherman >=7 && fisherman <= 11){
                boatCoast = boatCoast * 0.85;
            } else if (fisherman >= 12){
                boatCoast = boatCoast * 0.75;
            }
            break;
        case "Summer":
        case "Autumn":
            boatCoast = 4200;
            if (fisherman <= 6){
                boatCoast = boatCoast * 0.9
            } else if (fisherman >=7 && fisherman <= 11){
                boatCoast = boatCoast * 0.85;
            } else if (fisherman >= 12){
                boatCoast = boatCoast * 0.75;
            }
            break;
        case "Winter":
            boatCoast = 2600;
            if (fisherman <= 6){
                boatCoast = boatCoast * 0.9
            } else if (fisherman >=7 && fisherman <= 11){
                boatCoast = boatCoast * 0.85;
            } else if (fisherman >= 12){
                boatCoast = boatCoast * 0.75;
            }
            break;
    
        }

        if (fisherman % 2 === 0 && season !== "Autumn"){
            boatCoast = boatCoast * 0.95;
    }
    let diff = Math.abs(budget - boatCoast);

    if (budget >= boatCoast){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else if (budget < boatCoast){
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["2000",
"Winter",
"13"])
