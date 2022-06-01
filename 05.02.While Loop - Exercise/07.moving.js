function moving(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let size = w * l * h;
    let command = input[index];
    index++
    let isHaveSpace = true;
    
    while(command !== "Done"){
        let boxes = Number(command);
        size -= boxes;

        if(size < 0){
            isHaveSpace = false;
            console.log(`No more free space! You need ${Math.abs(size)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }
    if(isHaveSpace){
        console.log(`${size} Cubic meters left.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
