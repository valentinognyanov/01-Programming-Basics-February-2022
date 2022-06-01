function trainingLab(input){
    let w = Number(input[0]);
    let h = Number(input[1]);
    let wInCm = w * 100;
    let hInCm = h * 100;
    let hWithoutCoridor = hInCm - 100;
    let tables = Math.floor(hWithoutCoridor / 70);
    let rows = Math.floor(wInCm / 120);
    let totalPlacesToSit = tables * rows - 3;

    console.log(totalPlacesToSit)

}
trainingLab(["8.4", "5.2"])