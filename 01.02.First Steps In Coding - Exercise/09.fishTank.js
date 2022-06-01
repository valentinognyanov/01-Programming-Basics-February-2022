function fishTank(input){
    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let hight = Number(input[2]);
    let occupadedPercentage = Number(input[3]);
    let capacity = lenght * widht * hight;
    let volumeInLitre = capacity / 1000;
    let neededLitres = volumeInLitre * (1 - (occupadedPercentage / 100));
    console.log(neededLitres);

}
fishTank(["85","75","47","17"]);