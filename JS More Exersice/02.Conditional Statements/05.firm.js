function firm(input){
    let neededHours = Number(input[0]);
    let daysThatFirmHas = Number(input[1]);
    let workers = Number(input[2]);

    let daysWithoutTraining = daysThatFirmHas - (daysThatFirmHas * 0.1);
    let overtimeInHours = workers * 2 * daysThatFirmHas;
    let hoursWorkerHas = Math.floor(daysWithoutTraining * 8 + overtimeInHours);

    if (neededHours <= hoursWorkerHas){
        diff = hoursWorkerHas - neededHours;
        console.log(`Yes!${diff} hours left.`);
    } else if (neededHours > hoursWorkerHas){
        diff = neededHours - hoursWorkerHas;
        console.log(`Not enough time!${diff} hours needed.`)
    }
}
firm(["99","3","1"])