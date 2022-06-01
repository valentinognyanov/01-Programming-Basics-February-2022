function worldSwimmingRecord(input){
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForOneMeterInSec = Number(input[2]);

    let timeWithoutSlowing = distanceInMeters * timeForOneMeterInSec;
    let slowingTime = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = timeWithoutSlowing + slowingTime;

    if (totalTime < recordInSec){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else if (totalTime => recordInSec){
        let neededSec = totalTime - recordInSec;
        console.log(`No, he failed! He was ${neededSec.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
;