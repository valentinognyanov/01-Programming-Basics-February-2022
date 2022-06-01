function examPreparation(input){
    let index = 0;
    let countPoorGrades = Number(input[index]);
    index++;
    
    let command = input[index];
    index++;

    let currentPoorGrades = 0;
    let sumGrades = 0;
    let countProblems = 0;
    let lastName = "";
    let isNeedBreak = false;

    while(command !== "Enough"){
        let problemName = command;
        let grade = Number(input[index]);
        index++;
        
        lastName = problemName;
        countProblems++;
        sumGrades += grade;

        if(grade <= 4){
            currentPoorGrades++;
        }
        
        if(currentPoorGrades === countPoorGrades){
            console.log(`You need a break, ${countPoorGrades} poor grades.`);
            isNeedBreak = true;
            break;
        }
        
        command = input[index];
        index++;
    }   
    if(!isNeedBreak){
        let average = sumGrades / countProblems;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${lastName}`);
    }

    
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);