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
    let userRgbSelect = word => word.match(/[A-Za-z0-9]{2}/g).map(element => parseInt(element, 16))
    console.log(userRgbSelect(userSelection));
    console.log(userSelection);
    console.log('clicked');
    $("#userColorPanel").css("background-color", `${userSelection}`);
    $("#userColorDisplay").text(userRgbSelect(userSelection));
    let promise = ColorPicker.getColorSuggestion(userRgbSelect(userSelection));
    promise.then(function (response) {
      const body = JSON.parse(response);
      console.log("body", body.result);
      let colorValue1 = body.result[1];
      let colorValue2 = body.result[2];
      let colorValue3 = body.result[3];
      let colorValue4 = body.result[4];
      console.log(colorValue1);
      console.log(colorValue2);
      console.log(colorValue3);
      console.log(colorValue4);
      $("#color1").css("background-color", `rgb(${colorValue1})`);
      $("#color1Id").text(colorValue1);
      $("#color2").css("background-color", `rgb(${colorValue2})`);
      $("#color2Id").text(colorValue2);
      $("#color3").css("background-color", `rgb(${colorValue3})`);
      $("#color3Id").text(colorValue3);
      $("#color4").css("background-color", `rgb(${colorValue4})`);
      $("#color4Id").text(colorValue4);
    }, function (error) {
      console.log("error", error);
    });;

  });
});


