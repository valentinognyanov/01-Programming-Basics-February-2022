function celsiusToFahrenheit(input){
    let celcius = Number(input[0]);
    let fahrenheit = (celcius * 9) / 5 + 32;
    console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit(["25"])