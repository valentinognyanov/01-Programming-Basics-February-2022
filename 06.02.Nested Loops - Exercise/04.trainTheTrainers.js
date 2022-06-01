function trainTheTrainers(input){
    let index = 0;
    let jury = Number(input[index++]);
    let command = input[index++];

    let counter = 0;
    let sumGrade = 0;

    while(command !== "Finish"){
        let name = command;
        counter++;
        let sumTempGrades = 0;
        for(let i = 0; i < jury; i++){
            let grade = Number(input[index++]);
            sumTempGrades += grade
        }
        let avgTempGrade = sumTempGrades / jury;
        console.log(`${name} - ${avgTempGrade.toFixed(2)}.`);

        sumGrade += avgTempGrade;
        command = input[index++];
    }

    let average = sumGrade / counter;
    console.log(`Student's final assessment is ${average.toFixed(2)}.`);
}
trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);