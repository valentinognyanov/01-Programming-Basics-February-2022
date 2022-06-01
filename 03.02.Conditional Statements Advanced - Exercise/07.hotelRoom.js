function hotelRoom(input){
    let month = input[0];
    let nightsCount = Number(input[1]); 

    let studioSum = 0;
    let apartmentSum = 0;
    switch (month){
        case "May":
        case "October":
            studioSum = nightsCount * 50;
                if (nightsCount > 7 && nightsCount < 14){
                    studioSum = studioSum * 0.95;
                } else if (nightsCount > 14){
                    studioSum = (nightsCount * 50) * 0.7;
                }
                apartmentSum = nightsCount * 65;
            break;
        case "June":
        case "September":
                studioSum = nightsCount * 75.2;
                if (nightsCount > 14){
                    studioSum = studioSum * 0.8;
                }
                apartmentSum = nightsCount * 68.7;
            break;
        case "July":
        case "August":
                studioSum = nightsCount * 76;
                apartmentSum = nightsCount * 77; 
            break;
        }
    if (nightsCount > 14){
        apartmentSum = apartmentSum * 0.9;
    
    }
    console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`)
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`)

}
hotelRoom(["May","15"]);
