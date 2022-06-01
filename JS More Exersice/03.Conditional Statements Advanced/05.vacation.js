function vacation(input){
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let season = input[index];
    index++;

    let typeRoom = "";
    let roomPrice = 0;
    let location = "";

    if(budget <= 1000){
        typeRoom = "Camp";
        if(season === "Summer"){
            location = "Alaska"
            roomPrice = budget * 0.65;
        }else if(season === "Winter"){
            location = "Morocco"
            roomPrice = budget * 0.45; 
        }
    }else if(budget <= 3000){
        typeRoom = "Hut";
        if(season === "Summer"){
            location = "Alaska";
            roomPrice = budget * 0.8;
        }else if(season === "Winter"){
            location = "Morocco";
            roomPrice = budget * 0.6;
        }
    }else {
        typeRoom = "Hotel";
        roomPrice = budget * 0.9;
        if(season === "Summer"){
            location = "Alaska";
        }else if(season === "Winter"){
            location = "Morocco";
        }
    }
    console.log(`${location} - ${typeRoom} - ${roomPrice.toFixed(2)}`);
}
vacation(["3460","Summer"]);