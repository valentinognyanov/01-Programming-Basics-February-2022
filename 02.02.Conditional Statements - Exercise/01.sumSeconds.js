function sumSeconds(input){
    let timeOne = Number(input[0]);
    let timeTwo = Number(input[1]);
    let timeThree = Number(input[2]);
    let totalTime = timeOne + timeTwo + timeThree;
    let timeInMin = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10){
        console.log(`${timeInMin}:0${seconds}`);
    } else if (seconds => 10){
        console.log(`${timeInMin}:${seconds}`);
    }
}
sumSeconds(["14", "12",
"10"])
