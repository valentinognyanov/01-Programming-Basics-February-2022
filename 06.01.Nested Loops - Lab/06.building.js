function building(input){
    let numberOfFloors = Number(input[0]);
    let numberOfRooms = Number(input[1]);

    for(let i = numberOfFloors; i >= 1; i--){
        let floor = "";
        for(let j = 0; j < numberOfRooms; j++){
            if(i === numberOfFloors){
                floor += `L${i}${j} `;
            }
            if(i % 2 === 0 && i !== numberOfFloors){
                floor += `O${i}${j} `;
            }
            if(i % 2 !== 0 && i !== numberOfFloors){
                floor += `A${i}${j} `; 
            }
        }
        console.log(floor);
    }
}
building(["6", "4"]);