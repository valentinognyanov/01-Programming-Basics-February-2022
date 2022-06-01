function transportPrice(input){
    let distanseInKm = Number(input[0]);
    let timeOfTheDay = input[1];

        let busSum = distanseInKm * 0.09;
        let trainSum = distanseInKm * 0.06;
        
        if (timeOfTheDay === "day"){
            taxiSum = distanseInKm * 0.79 + 0.7;
        } else if (timeOfTheDay === "night"){
            taxiSum = distanseInKm * 0.9 + 0.7;
        }
        
        if (distanseInKm < 20){
            console.log(taxiSum.toFixed(2));
        } else if (distanseInKm < 100){
            console.log(busSum.toFixed(2));
        } else if (distanseInKm => 100){
            console.log(trainSum.toFixed(2));
        }
    
}
transportPrice(["7","night"])