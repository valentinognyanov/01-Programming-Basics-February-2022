function streamOfLetters(input){
    let validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let isC = false;
    let isO = false;
    let isN = false;
    
    let secret = ""
    let secretWord = "";
    let i = 0;
    while(i < input.length){
        let currentLetter = input[i];

        for(let i = 0; i < validLetters.length; i++){
            if(isC === true && isO === true && isN === true){
                secret += secretWord + " ";
                secretWord = "";
                isC = false;
                isO = false;
                isN = false;
            }
            let currentChar = validLetters[i];
            let isValid = currentLetter === currentChar;
            if(isValid){

                if(currentChar === "c"){
                    if(isC === false){
                        isC = true;
                    }else {
                        secretWord += currentChar;
                    }
                } else if(currentChar === "o"){
                    if(isO === false){
                        isO = true;
                    } else{
                        secretWord += currentChar;
                    }
                } else if(currentChar === "n"){
                    if(isN === false){
                        isN = true;
                    } else{
                        secretWord += currentChar;
                    }
                } else {
                    secretWord += currentChar;
                }
            }
        }
        if(currentLetter === "End"){
            break;
        }
        i++
    }
    console.log(secret);
}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);