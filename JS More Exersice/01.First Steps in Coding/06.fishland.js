function fishland(input){
    let mackerelPricePerKilo = Number(input[0]);
    let spratPricePerKilo = Number(input[1]);
    let kilosBenito = Number(input[2]);
    let kilosScad = Number(input[3]);
    let kilosShell = Number(input[4]);

    let benitoPricePerKilo = mackerelPricePerKilo + (mackerelPricePerKilo * 0.6);
    let benitoTotalSum = benitoPricePerKilo * kilosBenito;
    let scadPricePerKilo = spratPricePerKilo + (spratPricePerKilo * 0.8);
    let scadTotalSum = scadPricePerKilo * kilosScad;
    let shellTotalSum = kilosShell * 7.5;

    totalSum = benitoTotalSum + scadTotalSum + shellTotalSum;
    console.log(totalSum.toFixed(2));
}
fishland(["6.90", "4.20", "1.5", "2.5", "1"])