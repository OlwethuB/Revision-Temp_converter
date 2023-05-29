// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  // TODO: Implement the conversion logic here
  tofahrenheit = (temperature * (9 / 5) + 32);
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  // TODO: Implement the conversion logic here\
  tocelsius = (temperature - 32) * 5/9;
}

// Prompt the user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt(
  "Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)"
);

if (conversionType.toLowerCase() === "celsius to fahrenheit") {
  // TODO: Call the celsiusToFahrenheit function and display the result
  celsiusToFahrenheit();
    document.getElementById("result").innerHTML = celsiusToFahrenheit(celsius, tofahrenheit) + "&#176; Fahrenheit";
    
} else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
  // TODO: Call the fahrenheitToCelsius function and display the result
  fahrenheitToCelsius();
    document.getElementById("result").innerHTML = fahrenheitToCelsius(fahrenheit, tocelsius) + "&#176; Celsius";
    
} else {
  alert("Invalid conversion type.");
}
