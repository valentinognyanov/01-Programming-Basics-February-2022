function oldBooks(input){
    let index = 0;
    let favBook = input[index];
    index++;
    let command = input[index];
    index++;
    let bookIsFound = false;
    let bookCounter = 0;

    while(command !== "No More Books"){
        let book = command;
        if(favBook === book){
            bookIsFound = true;
            break;
        }
        command = input[index];
        index++;
        bookCounter++;
    }
    if(!bookIsFound){
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    } else {
        console.log(`You checked ${bookCounter} books and found it.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
