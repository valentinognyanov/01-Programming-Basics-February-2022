function walking(input){
    let index = 0;
    let command = input[index];
    index++;
    let stepsSum = 0;
    
    while(stepsSum < 10000 && command !== "Going home"){
        let steps = Number(command);
        stepsSum += steps;
        command = input[index];
        index++;  
    }
    
    if(command === "Going home"){
        let finalSteps = Number(input[index]);
        index++;
        stepsSum += finalSteps;
    }

    if(stepsSum < 10000){
        let finalRes = 10000 - stepsSum;
        console.log(`${finalRes} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        let finalRes = stepsSum - 10000;
        console.log(`${finalRes} steps over the goal!`);
    }  
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
