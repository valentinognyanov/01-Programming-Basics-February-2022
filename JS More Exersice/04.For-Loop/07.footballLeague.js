function footballLeague(input){
    let index = 0;
    let stadiumCapacity = Number(input[index++]);
    let fans = Number(input[index++]);

    let sectorASum = 0;
    let sectorBSum = 0;
    let sectorVSum = 0;
    let sectorGSum = 0;
    
    for(let i = 0; i < fans; i++){
        let sector = input[index++];
        if(sector === "A"){
            sectorASum++;
        } else if(sector === "B"){
            sectorBSum++;
        } else if(sector === "V"){
            sectorVSum++;
        } else if(sector === "G"){
            sectorGSum++;
        }
    }
    let sectorAPercentage = (sectorASum / fans) * 100;
    let sectorBPercentage = (sectorBSum / fans) * 100;
    let sectorVPercentage = (sectorVSum / fans) * 100;
    let sectorGPercentage = (sectorGSum / fans) * 100;
    let allFansPercentage = (fans / stadiumCapacity) * 100;

    console.log(`${sectorAPercentage.toFixed(2)}%`);
    console.log(`${sectorBPercentage.toFixed(2)}%`);
    console.log(`${sectorVPercentage.toFixed(2)}%`);
    console.log(`${sectorGPercentage.toFixed(2)}%`);
    console.log(`${allFansPercentage.toFixed(2)}%`);
}
footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"]);