function hospital(input){
    let index = 0;
    let period = Number(input[index++]);
    let patients = Number(input[index++]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let currentTreatedPatients = 0;
    let currentUntreatedPatients = 0;

    for(let i = 1; i <= period; i++){
        if(i % 3 == 0){
            if(untreatedPatients > treatedPatients){
                doctors++;
            }
        }
        if(patients >= doctors){
            currentTreatedPatients = doctors;
        } else {
            currentTreatedPatients = patients;
        }
        currentUntreatedPatients = patients - doctors;
        
        if(currentUntreatedPatients <= 0){
            currentUntreatedPatients = 0;
        }
        treatedPatients += currentTreatedPatients;
        untreatedPatients += currentUntreatedPatients;

        patients = Number(input[index++]);
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital(["4", "7", "27", "9", "1"]);