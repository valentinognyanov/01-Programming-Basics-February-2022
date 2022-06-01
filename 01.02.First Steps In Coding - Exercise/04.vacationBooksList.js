function vacationBooksList(input) {
    let amountPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let totalHours = amountPages / pagesPerHour;
    let amountHoursPerDay = totalHours / days; 
    console.log(amountHoursPerDay);

}
vacationBooksList(["432","15","4"])
