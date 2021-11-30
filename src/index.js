import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ColorPicker from './color-api';

// function clearFields() {
//   $('#location').val("");
//   $('.showErrors').text("");
//   $('.showHumidity').text("");
//   $('.showTemp').text("");
// }

// function getElements(response) {
//   if (response.main) {
//     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//     let fahrenheit = (response.main.temp - 273.15) * (9 / 5) + 32;
//     $('.showNewTemp').text('The temperature in Fahrenheit is:' + fahrenheit);
//   } else {
//     $('.showErrors').text(`There was an error processing your request: ${response.message}`);
//   }
// }

// async function makeApiCall(city) {
//   const response = await WeatherService.getWeather(city);
//   getElements(response);
// }

$(document).ready(function () {
  $("#colorSubmit").submit(function (event) {
    event.preventDefault();
    let userSelection = $("#color-picker").val();
    console.log(userSelection);
    console.log('clicked');
    let promise = ColorPicker.getColorSuggestion();
    promise.then(function (response) {
      const body = JSON.parse(response);
      console.log("body", body.result);
    }, function (error) {
      console.log("error", error);
    });;
  });
});


