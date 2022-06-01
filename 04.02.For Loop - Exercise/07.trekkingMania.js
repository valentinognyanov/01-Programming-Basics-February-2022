function trekkingMania(input){
    let index = 0;
    let groupCount = Number(input[index]);
    index++;
    
    let place1Counter = 0;
    let place2Counter = 0;
    let place3Counter = 0;
    let place4Counter = 0;
    let place5Counter = 0;

    for(let i = 1; i <= groupCount; i++){
        let peopleCount = Number(input[index]);
        index++;
        if (peopleCount <= 5){
            place1Counter += peopleCount;
        } else if(peopleCount <= 12){
            place2Counter += peopleCount;
        } else if(peopleCount <= 25){
            place3Counter += peopleCount;
        } else if(peopleCount <= 40){
            place4Counter += peopleCount;
        } else if(peopleCount >= 41){
            place5Counter += peopleCount;
        }
           
    }
    let totalPeople = place1Counter + place2Counter + place3Counter + place4Counter + place5Counter;
    let place1 = place1Counter / totalPeople * 100;
    let place2 = place2Counter / totalPeople * 100;
    let place3 = place3Counter / totalPeople * 100;
    let place4 = place4Counter / totalPeople * 100;
    let place5 = place5Counter / totalPeople * 100;
    
    console.log(`${place1.toFixed(2)}%`);
    console.log(`${place2.toFixed(2)}%`);
    console.log(`${place3.toFixed(2)}%`);
    console.log(`${place4.toFixed(2)}%`);
    console.log(`${place5.toFixed(2)}%`);

}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
