function schoolCamp(input){
    index = 0;
    let season = input[index];
    index++;
    let typeGroup = input[index];
    index++;
    let studentscount = Number(input[index]);
    index++;
    let nightsCount = Number(input[index]);
    index++;

    let pricePerNight = 0;
    let typeSport = "";

    switch(season){
        case "Winter":
            if(typeGroup === "boys"){
                pricePerNight += 9.6;
                typeSport = "Judo";
            }else if(typeGroup === "girls"){
                pricePerNight += 9.6;
                typeSport = "Gymnastics";
            }else if(typeGroup === "mixed"){
                pricePerNight += 10;
                typeSport = "Ski";
            }
            break;
        case "Spring":
            if(typeGroup === "boys"){
                pricePerNight += 7.2;
                typeSport = "Tennis";
            }else if(typeGroup === "girls"){
                pricePerNight += 7.2;
                typeSport = "Athletics";
            }else if(typeGroup === "mixed"){
                pricePerNight += 9.5;
                typeSport = "Cycling";
            }
            break;
        case "Summer":
            if(typeGroup === "boys"){
                pricePerNight += 15;
                typeSport = "Football";
            }else if(typeGroup === "girls"){
                pricePerNight += 15;
                typeSport = "Volleyball";
            }else if(typeGroup === "mixed"){
                pricePerNight += 20;
                typeSport = "Swimming";
            }
            break;
    }
    let totalSum = nightsCount * pricePerNight * studentscount;
    if(studentscount >= 10 && studentscount < 20){
        totalSum *= 0.95;
    }else if(studentscount < 50 && studentscount >= 20){
        totalSum *= 0.85;
    }else if(studentscount >= 50){
        totalSum *= 0.5; 
    }else{
        totalSum = totalSum;
    }
    console.log(`${typeSport} ${totalSum.toFixed(2)} lv.`)
}
schoolCamp(["Winter","mixed","9","15"]);