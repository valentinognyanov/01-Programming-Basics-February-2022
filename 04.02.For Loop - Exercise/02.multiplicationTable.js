function multiplicationTable(input){
    let x = Number(input[0]);

    for (let i = 1; i <= 10; i++){
        console.log(`${i} * ${x} = ${i * x}`);
    }
}