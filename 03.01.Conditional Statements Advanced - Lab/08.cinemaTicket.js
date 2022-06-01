function cinemaTicket(input) {
    let day = input[0];
    let sum = 0;
    switch (day){
        case "Monday":
        case "Tuesday":
        case "Friday":
            sum = 12;
        console.log(sum);
        break;
        case "Wednesday":
        case "Thursday":
            sum = 14;
        console.log(sum);
        break;
        case "Saturday":
        case "Sunday":
            sum = 16;
        console.log(sum);
        break;
    }
}
cinemaTicket(["Thursday"]);