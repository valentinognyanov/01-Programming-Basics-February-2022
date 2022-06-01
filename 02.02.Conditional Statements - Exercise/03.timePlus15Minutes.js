function timePlus15Minutes(input){
    let h = Number(input[0]);
    let m = Number(input[1]);

    let time = h * 60 + m;
    time = time + 15;

    let hours = Math.floor(time / 60);
    let min = time % 60;

    if (hours === 24){
        hours = 0;
    }
    if (min < 10){
        console.log(`${hours}:0${min}`);
    } else {
        console.log(`${hours}:${min}`);
    }
}
timePlus15Minutes(["24", "14"])