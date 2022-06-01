function traveling(input){
    let index = 0;
    let command = input[index++];

    while(command !== "End"){
        let name = command;
        let budget = Number(input[index++]);
        let savedMoney = 0;
        
        while(budget > savedMoney){
            let currentSum = Number(input[index++]);
            savedMoney += currentSum;
        }
        console.log(`Going to ${name}!`);
        command = input[index++];
    }
}
traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])