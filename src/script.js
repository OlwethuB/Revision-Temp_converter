// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  // TODO: Implement the conversion logic here
  output = (temperature * (9 / 5) + 32);
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  // TODO: Implement the conversion logic here\
  output = (temperature - 32) * 5/9;
}

// Prompt the user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt(
  "Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)"
);

if (conversionType.toLowerCase() === "celsius to fahrenheit") {
  // TODO: Call the celsiusToFahrenheit function and display the result
  celsiusToFahrenheit();
  console.log
} else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
  // TODO: Call the fahrenheitToCelsius function and display the result
  fahrenheitToCelsius();
  console.log 
} else {
  alert("Invalid conversion type.");
}
