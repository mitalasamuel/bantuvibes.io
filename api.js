const apiKey = "YOUR_API_KEY";
const city = "New York";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // do something with the data, such as display the temperature
  })
  .catch(error => console.log(error));
