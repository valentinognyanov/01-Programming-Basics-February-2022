function onTimeForTheExam(input){
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMin = Number(input[3]);

    let examTime = examHour * 60 + examMin;
    let arrivingTime = arrivingHour *60 + arrivingMin;
    if (examTime < arrivingTime){
        console.log("Late");
        let diff = Math.abs(examTime - arrivingTime);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h > 0){
            if (m < 10){
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    } else if (examTime >= arrivingTime && Math.abs(examTime - arrivingTime) <= 30) {
        console.log("On Time");
        let diff = Math.abs(examTime - arrivingTime);
        if (diff > 0){
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff = Math.abs(examTime - arrivingTime);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h > 0){
            if (m < 10){
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else {
            console.log(`${m} minutes before the start`);
        }
    }

}
onTimeForTheExam(["9","30","9","50"]);