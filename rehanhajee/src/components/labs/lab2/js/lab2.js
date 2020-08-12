var city;
var units = "metric";
var tempUnit = "C";
var speed = "m/s";
var previousCity;

window.onload = function() {
	getCity();
	var input = document.querySelector("#tempToggle");

	input.addEventListener("change", function() {
		if(document.getElementById("tempToggle").checked) {
			units = "imperial";
			tempUnit = "F";
			speed = "MPH";
		} else {
			units = "metric";
			tempUnit = "C";
			speed = "m/s";
		}

		getWeather();		
		getForecast();
		
	});

}

function getCity() {
	
	if (document.getElementById('cityName').value != "") {
		city = document.getElementById('cityName').value;
	} else {
		city = "toronto";
	}
	
	getWeather();
	getForecast();
	
	//document.getElementById('cityName').value = "";
}

function getWeather() {

	let xmlhttp = new XMLHttpRequest();
	
	let jsonResponse;

	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			jsonResponse = xmlhttp.responseText;
			weatherFunction(jsonResponse);
		}
	}

	xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units +"&APPID=afcc13f6a28ceb7ca319da3fcc432b1c", true);
	xmlhttp.send(null);
}

function weatherFunction(response) {
	let currentWeather = JSON.parse(response);
	document.getElementById("pageTitle").innerHTML = "Current Weather for " + currentWeather.name + ", " + currentWeather.sys.country;
	document.getElementById("city").innerHTML = currentWeather.name + ", " + currentWeather.sys.country;
	let time = new Date(currentWeather.dt * 1000);
	
	switch (time.getDay()) {
		case 0: document.getElementById("currentTime").innerHTML = "Sunday, "; break;
		case 1: document.getElementById("currentTime").innerHTML = "Monday, "; break;
		case 2: document.getElementById("currentTime").innerHTML = "Tuesday "; break;
		case 3: document.getElementById("currentTime").innerHTML = "Wednesday, "; break;
		case 4: document.getElementById("currentTime").innerHTML = "Thursday, "; break;
		case 5: document.getElementById("currentTime").innerHTML = "Friday, "; break;
		default: document.getElementById("currentTime").innerHTML = "Saturday, ";
	}
	
	switch (time.getMonth()) {
		case 0: document.getElementById("currentTime").innerHTML += "January "; break;
		case 1: document.getElementById("currentTime").innerHTML += "February "; break;
		case 2: document.getElementById("currentTime").innerHTML += "March "; break;
		case 3: document.getElementById("currentTime").innerHTML += "April "; break;
		case 4: document.getElementById("currentTime").innerHTML += "May "; break;
		case 5: document.getElementById("currentTime").innerHTML += "June "; break;
		case 6: document.getElementById("currentTime").innerHTML += "July "; break;
		case 7: document.getElementById("currentTime").innerHTML += "August "; break;
		case 8: document.getElementById("currentTime").innerHTML += "September "; break;
		case 9: document.getElementById("currentTime").innerHTML += "October"; break;
		case 10: document.getElementById("currentTime").innerHTML += "November "; break;
		default: document.getElementById("currentTime").innerHTML += "December ";
	}
	
	document.getElementById("currentTime").innerHTML += time.getDate() + ", " + time.getFullYear() + ", " + (time.getUTCHours() + currentWeather.timezone / 3600) + ":";
	if (time.getMinutes() < 10) document.getElementById("currentTime").innerHTML += "0";
	document.getElementById("currentTime").innerHTML += time.getMinutes() + " GMT" + currentWeather.timezone / 3600;
	document.getElementById("currentWeatherType").innerHTML = "Current conditions: "+ currentWeather.weather[0].description.charAt(0).toUpperCase() + currentWeather.weather[0].description.substr(1);
	document.getElementById("currentTemp").innerHTML = currentWeather.main.temp + " &#176;" + tempUnit;
	document.getElementById("currentWeatherImg").innerHTML = "<img src = \"https://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png\">";
	document.getElementById("currentWind").innerHTML = "Wind: " + currentWeather.wind.deg + "&#176; " + currentWeather.wind.speed + " " + speed;
	if (currentWeather.wind.hasOwnProperty("gust")) document.getElementById("currentWind").innerHTML = "Wind: " + currentWeather.wind.deg + "&#176; " + currentWeather.wind.speed + " " + speed + ", gusting up to " + currentWeather.wind.gust + " " + speed;
	document.getElementById("currentMin").innerHTML = "Today's Low: " + currentWeather.main.temp_min + " &#176;" + tempUnit;
	document.getElementById("currentMax").innerHTML = "Today's High: " + currentWeather.main.temp_min + " &#176;" + tempUnit;
	document.getElementById("currentHumidity").innerHTML = "Humidity: " + currentWeather.main.humidity + "%";
}

function getForecast() {
	let xmlhttpForecast = new XMLHttpRequest();

	let jsonResponseForecast;

	xmlhttpForecast.onreadystatechange = function() {
		if(xmlhttpForecast.readyState == 4 && xmlhttpForecast.status == 200) {
			jsonResponseForecast = xmlhttpForecast.responseText;
			forecastFunction(jsonResponseForecast);
		}
	}

	xmlhttpForecast.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&APPID=afcc13f6a28ceb7ca319da3fcc432b1c", true);
	xmlhttpForecast.send(null);
}
	
function forecastFunction(response) {
	var forecastWeather = JSON.parse(response);
	var list = forecastWeather.list;
	
	var out = "<br /><h3>Upcoming Forecast: </h3><br />";
	
	for (let i = 1; i <= list.length; i++) {
		out += "<div class=\"forecast\"> <br />" + list[i - 1].dt_txt.substr(5,11) + 
		"<br />" + list[i - 1].main.temp + " &#176;" + tempUnit + 
		"<br />" + list[i - 1].weather[0].description.charAt(0).toUpperCase() + list[i - 1].weather[0].description.substr(1) + 
		"<br />" + "<img src = \"https://openweathermap.org/img/w/" + list[i - 1].weather[0].icon + ".png\">" + 
		"<br /> High: " + list[i - 1].main.temp_max + " &#176;" + tempUnit +
		"<br /> Low: " + list[i - 1].main.temp_min + " &#176;" + tempUnit +
		"<br /> Wind: " + list[i - 1].wind.deg + "&#176; " + list[i - 1].wind.speed + " " + speed + 
		"<br /> Humidity: " + list[i - 1].main.humidity + "%<br /><br /></div>";
	}
	
	document.getElementById("forecast").innerHTML = out;
}


	
	
	
	
	

	