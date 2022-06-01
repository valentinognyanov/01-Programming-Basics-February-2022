function pointOnRectangleBorder(input){
    let index = 0;
    let x1 = Number(input[index]);
    index++;
    let y1 = Number(input[index]);
    index++;
    let x2 = Number(input[index]);
    index++;
    let y2 = Number(input[index]);
    index++;
    let x = Number(input[index]);
    index++;
    let y = Number(input[index]);
    index++;
    
    if ((x > x1 && x < x2 && y > y1 && y < y2) || (x < x1 || y < y1 || x > x2 || y > y2)){
        console.log("Inside / Outside");
    }else{
        console.log("Border");
    }
}

pointOnRectangleBorder(["2","-3","12","3","1","3"]);