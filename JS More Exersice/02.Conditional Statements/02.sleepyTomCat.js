function sleepyTomCat(input){
    let restDays = Number(input[0]);

    let workDays = 365 - restDays;
    let playingInWorkDays = workDays * 63;
    let playingInRestDays = restDays * 127;
    let totalPlayTime = playingInWorkDays + playingInRestDays;
    let diff = Math.abs(30000 - totalPlayTime);
    let timeInHours = Math.floor(diff / 60);
    let timeInMin = diff % 60
    let playTime = timeInHours + ":" + timeInMin

    if (totalPlayTime > 30000){
        console.log("Tom will run away");
        console.log(`${timeInHours} hours and ${timeInMin} minutes more for play`);
    } else if (totalPlayTime <= 30000){
        console.log("Tom sleeps well");
        console.log(`${timeInHours} hours and ${timeInMin} minutes less for play`);
    }
}
sleepyTomCat(["113"]);