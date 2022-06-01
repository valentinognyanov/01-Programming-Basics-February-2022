function cinemaTickets(input){
    let index = 0;
    let command = input[index++];

    let studentTicketCount = 0;
    let standartTicketCount = 0;
    let kidTicketCount = 0;
    let ticketCount = 0;

    while(command !== "Finish"){
        let movieName = command;
        let capacity = Number(input[index++]);
        let type = input[index++];
        let tempTicketCount = 0;

        while(type !== "End"){
            switch(type){
                case "student": studentTicketCount++; break;
                case "standard": standartTicketCount++; break;
                case "kid": kidTicketCount++; break;
            }
            tempTicketCount++;
            if(tempTicketCount >= capacity){
                break;
            }
            type = input[index++];
        }
        let capacityPercentage = tempTicketCount / capacity * 100;
        ticketCount += tempTicketCount;
        
        console.log(`${movieName} - ${capacityPercentage.toFixed(2)}% full.`);
        command = input[index++];
    }
    let studentTicketPercentage = studentTicketCount / ticketCount * 100;
    let standartTicketPercentage = standartTicketCount / ticketCount * 100;
    let kidTicketPercentage = kidTicketCount / ticketCount * 100;

    console.log(`Total tickets: ${ticketCount}`);
    console.log(`${studentTicketPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketPercentage.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);