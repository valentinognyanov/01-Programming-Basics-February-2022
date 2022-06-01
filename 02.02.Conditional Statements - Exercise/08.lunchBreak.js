function lunchBreak(input){
    let nameTVShow = input[0];
    let timeForEpisode = Number(input[1]);
    let timeForBreak = Number(input[2]);
    
    let lunch = timeForBreak / 8;
    let freeTime = timeForBreak / 4;
    let timeLeft = timeForBreak - lunch - freeTime; 
     
    let diff = Math.abs(timeLeft - timeForEpisode);
    if (timeLeft >= timeForEpisode){
        console.log(`You have enough time to watch ${nameTVShow} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameTVShow}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
;