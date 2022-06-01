function newHouse(input){
    let = typeFlower = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;
    switch(typeFlower){
        case "Roses":
            sum = 5;
            if (countFlowers > 80){
                sum = sum * 0.9;
            }
            break;
        case "Dahlias":
            sum = 3.8;
            if (countFlowers > 90){
                sum = sum * 0.85;
            }
            break;
        case "Tulips":
            sum = 2.8;
            if (countFlowers > 80){
                sum = sum * 0.85;
            }
            break;
        case "Narcissus":
            sum = 3
            if (countFlowers < 120){
                sum = sum * 1.15;
            }
            break;
        case "Gladiolus":
            sum = 2.5;
            if (countFlowers < 80){
                sum = sum * 1.2;
            }
            break;
    }
    let totalSum = sum * countFlowers
    let diff = Math.abs(totalSum - budget);
    
    if (budget >= totalSum){
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlower} and ${diff.toFixed(2)} leva left.`)
    } else if (budget < totalSum){
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}
newHouse(["Narcissus",
"119",
"360"])
