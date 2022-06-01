function weatherForecast(input){
    let sunny = input[0]
    if (sunny === "sunny") {
    console.log(`It's warm outside!`);
    } else {
    console.log(`It's cold outside!`);
    }
}
weatherForecast(["one"]);