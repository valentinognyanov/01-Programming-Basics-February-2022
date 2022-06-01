function weddingSeats(input){
    let lastSector = input[0]
    let rowCount = Number(input[1]);
    let oddSeatCount = Number(input[2]);
    
    let firstCharNum = 'a'.charCodeAt(0);
    let firstChar = 'A';
    let counter = 0;

    for( i = firstChar.charCodeAt(0); i <= lastSector.charCodeAt(0); i++){
        for(let j = 1; j <= rowCount; j++){
            if(j % 2 !== 0){
                for(let k = firstCharNum; k < firstCharNum + oddSeatCount; k++){
                    let currentLetter = String.fromCharCode(i);
                    let currentSmallLetter = String.fromCharCode(k);
                    console.log(`${currentLetter}${j}${currentSmallLetter}`);
                    counter++;
                }
            } else {
                for(let k = firstCharNum; k < firstCharNum + oddSeatCount + 2; k++){
                    let currentLetter = String.fromCharCode(i);
                    let currentSmallLetter = String.fromCharCode(k);
                    console.log(`${currentLetter}${j}${currentSmallLetter}`);
                    counter++
                }
            }
        }
        rowCount++;
    }
    console.log(counter);
}
weddingSeats(["B", "3", "2"]);