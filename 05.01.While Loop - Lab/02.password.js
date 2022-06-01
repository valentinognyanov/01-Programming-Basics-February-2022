function password(input){
    index = 0;
    let name = input[index];
    index++;
    let correctPass = input[index];
    index++;

    while(true){
        let password = input[index];
        index++;
        if(password === correctPass){
            console.log(`Welcome ${name}!`);
            break;
        }
    }
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);