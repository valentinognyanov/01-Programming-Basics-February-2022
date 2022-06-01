function housePainting(input){
    let x = Number(input[0]);
    let y = Number (input[1]);
    let h = Number(input[2]);

    let houseSideWithWindow = x * y;
    let window = 1.5 * 1.5;
    let houseSides = (houseSideWithWindow - window) * 2;
    let houseFrontWithDoor = x * x;
    let houseBack = x * x;
    let door = 1.2 * 2;
    let houseFront = houseFrontWithDoor - door;
    let greenPaintSquareM = houseFront + houseSides + houseBack;
    let greenPaint = greenPaintSquareM / 3.4;

    let frontAndBackRoof = (x * h / 2) * 2;
    let roofSides = (x * y) * 2;
    let redPaintSquareM = frontAndBackRoof + roofSides;
    let redPaint = redPaintSquareM / 4.3; 
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}
housePainting(["10.25", "15.45", "8.88"]);