function challengeTheWedding(input){
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let counter = 0;
    let couples = "";

    for(let i = 1; i <= men; i++){
        for(let j = 1; j <= women; j++){
            counter++;
            couples += `(${i} <-> ${j}) `;
            if(counter === tables){
                break;
            }
        }
        if(counter === tables){
            break;
        }
    }
    console.log(couples);
}
challengeTheWedding([5, 5, 50])