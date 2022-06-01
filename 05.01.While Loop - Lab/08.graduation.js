function graduation(input){
    let index = 0;
    let student = input[index];
    index++;
    let total = 0;
    let fails = 0;
    let grade = 1;

    while(index < input.length){
        if(fails > 1 ){
            console.log(`${student} has been excluded at ${grade} grade`);
            break;
        }
        let currentGrade = Number(input[index]);
        if(currentGrade < 4){
            fails++;
            continue;
        }
        total += currentGrade
        if(grade >= 12){
            let average = total / grade
            console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`);
            break;
        }
        grade++;
        index++;
    }

}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);