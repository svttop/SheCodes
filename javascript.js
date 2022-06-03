function myFunction() {
  document.getElementById("temp").innerHTML = "66";
}

function myFunctionA() {
  document.getElementById("temp").innerHTML = "19";
}
let now = new Date();
let h4 = document.querySelector("h4");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let day = days[now.getDay()];

h4.innerHTML = `${day}, ${hour}:${minute}`;

//function handleClick(event) {
//event.preventDefault();
//let cityInput = document.querySelector("#user-input");
//h2.innerHTML = ` ${cityInput.value}`;
//}

//let button = document.querySelector("#city-search");
//button.addEventListener("submit", handleClick);

function tempUnit(event) {
  event.preventDefault();
  let changeTemp = document.querySelector("#unit-celsius");
  changeTemp.addEventListener("click", tempUnit);
  temp.innerHTML = `66`;
}

let weather = {
  paris: {
    temperature: "19.4",
    humidity: "80%",
  },

  sydney: {
    temperature: "16.3",
    humidity: "45%",
  },

  singapore: {
    temperature: "32.3",
    humidity: "88%",
  },

  seoul: {
    temperature: "21.5",
    humidity: "39%",
  },

  japan: {
    temperature: "17.9",
    humidity: "81%",
  },

  bangkok: {
    temperature: "28.9",
    humidity: "81%",
  },
};

let apiKey = "ff34823356eb24de65ff432da1bc6a20";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff34823356eb24de65ff432da1bc6a20&&units=metric";
//let cityInput = document.querySelector("#city-search");
//let city = cityInput;

//function displayTemperature(response) {
//let temperature = Math.round(response.data.main.temp);
//let temperatureElement = document.querySelector("h3");
//temperatureElement.innerHTML = `It is currently ${temperature} degrees in ${response.data.name}`;
//}
//let specialButton = document.querySelector("#user-input");
//specialButton.addEventListener("submit", displayTemperature);

function handleClick(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  let cityInput = document.querySelector("#user-input");
  h2.innerHTML = ` ${cityInput.value}`;
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "ff34823356eb24de65ff432da1bc6a20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h3");
  temperatureElement.innerHTML = `It is currently ${temperature} degrees in ${response.data.name}`;
}
let specialButton = document.querySelector("#city-search");
specialButton.addEventListener("submit", handleClick);

axios.get(`${apiUrl}&appID=${apiKey}`).then(displayTemperature);

function showTemperature(response) {
  console.log(response.data);

  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h3");
  let countryElement = document.querySelector("h2");
  temperatureElement.innerHTML = `It is currently ${temperature} degrees in ${response.data.name}`;
  countryElement.innerHTML = `${response.data.name}`;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);
