function carToGo(input){
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let season = input[index];
    index++;

    let comfortClass = "";
    let typeCar = "";
    let carPrice = 0;

    if(budget <= 100){
        comfortClass = "Economy class"
        if(season === "Summer"){
            typeCar = "Cabrio";
            carPrice = budget * 0.35;
        }else if(season === "Winter"){
            typeCar = "Jeep";
            carPrice = budget * 0.65;
        } 
    }else if(budget <= 500){
        comfortClass = "Compact class";
        if(season === "Summer"){
            typeCar = "Cabrio";
            carPrice = budget * 0.45;
        }else if(season === "Winter"){
            typeCar = "Jeep";
            carPrice = budget * 0.80
        }
    }else if(budget > 500){
        comfortClass = "Luxury class";
        if(season === "Summer" || season === "Winter"){
            typeCar = "Jeep";
            carPrice = budget * 0.90;
        }
    }
    console.log(`${comfortClass}`);
    console.log(`${typeCar} - ${carPrice.toFixed(2)}`);
}
carToGo(["1010","Summer"]);