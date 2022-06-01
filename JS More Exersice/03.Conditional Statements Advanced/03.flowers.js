function flowers(input){
    index = 0;
    let chrysanthemums = Number(input[index]);
    index++;
    let roses = Number(input[index]);
    index++;
    let tulips = Number(input[index]);
    index++;
    let season = input[index];
    index++;
    let typeDay = input[index];
    index++;

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let chrysanthemumsSum = 0;
    let rosesSum = 0;
    let tulipsSum = 0;
    
    switch(season){
        case "Spring":
        case "Summer":
            chrysanthemumsPrice = 2;
            rosesPrice = 4.1;
            tulipsPrice = 2.5;
            if(typeDay === "Y"){
                chrysanthemumsPrice = 2 * 1.15;
                rosesPrice = 4.1 * 1.15;
                tulipsPrice = 2.5 * 1.15;
            }
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.5;
            tulipsPrice = 4.15;
            if(typeDay === "Y"){
                chrysanthemumsPrice = 3.75 * 1.15;
                rosesPrice = 4.5 * 1.15;
                tulipsPrice = 4.15 * 1.15;
            }
            break;
    }
    let buquette = (chrysanthemums * chrysanthemumsPrice) + (roses * rosesPrice) + (tulips * tulipsPrice);
    if(season === "Spring" && tulips > 7){
        buquette = buquette * 0.95;
    }
    if(season === "Winter" && roses >= 10){
        buquette = buquette * 0.9;
    }
    
    if(chrysanthemums + roses + tulips > 20){
        buquette = buquette * 0.8;
    }
    buquette = buquette + 2;
    console.log(buquette.toFixed(2));
}
flowers(["10","10","10","Autumn","N"]);
