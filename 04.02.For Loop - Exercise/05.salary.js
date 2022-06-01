function salary(input){
    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let isHaveSalary = true;

    for(let i = 0; i < tabs; i++){
        let name = input[index];
        index++;

        switch(name){
            case "Facebook": money -= 150; break;
            case "Instagram": money -= 100; break;
            case "Reddit": money -= 50; break;
        }
        if(money <= 0){
            isHaveSalary = false;
            console.log("You have lost your salary.");
            break;
        }
    }
    if(isHaveSalary){
        console.log(money);
    }

}
salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);