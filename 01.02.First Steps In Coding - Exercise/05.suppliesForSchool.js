function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = Number(input[3]);
    let pensTotal = pens * 5.8;
    let markersTotal = markers * 7.2;
    let cleanersTotal = cleaner * 1.2;
    let totalPriceWithoutDiscount = pensTotal + markersTotal + cleanersTotal;
    let totalSum = totalPriceWithoutDiscount - (totalPriceWithoutDiscount * (discount / 100));
    console.log(totalSum);
}
suppliesForSchool (["2","3","4","25"])