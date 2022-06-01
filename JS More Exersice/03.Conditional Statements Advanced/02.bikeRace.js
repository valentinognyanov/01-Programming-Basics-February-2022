function bikeRace(input){
    let index = 0;
    let juniorRiders = Number(input[index]);
    index++;
    let seniorRiders = Number(input[index]);
    index++;
    let typeTrace = input[index];
    index++;

    let juniorSum = 0;
    let seniorSum = 0; 

    switch(typeTrace){
        case "trail":
            juniorSum = 5.5;
            seniorSum = 7;
            break;
        case "cross-country":
            juniorSum = 8;
            seniorSum = 9.5;
            if(juniorRiders + seniorRiders >= 50){
                juniorSum = 8 * 0.75;
                seniorSum = 9.5 * 0.75;
            }
            break;
        case "downhill":
            juniorSum = 12.25;
            seniorSum = 13.75;
            break;
        case "road":
            juniorSum = 20;
            seniorSum = 21.5;
            break;
    }
    let totalSumWithoutExpences = (juniorRiders * juniorSum) + (seniorRiders * seniorSum);
    let totalSum = totalSumWithoutExpences * 0.95;

    console.log(totalSum.toFixed(2));
}
bikeRace(["21","26","cross-country"]);