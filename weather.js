let weather = {
    apiKey:"609553ec36fad27373be0f19cc6d9f47",
    fetchWeather: function(city){
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&appid=" 
            + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    }, 
    displayWeather: function(data){
      const { name } = data;
      const { icon,description } = data.weather[0];
      const { temp,humidity } = data.main;
      const { speed } = data.wind;
     
      document.querySelector(".city").innerText= "Weather in " + name;
      document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText =
        (temp - 273.15).toFixed(1) + "°C";
      document.querySelector(".temp2").innerText =
        (((temp - 273.15) * 9) / 5 + 32).toFixed(1) + "°F";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
      document.querySelector(".wind2").innerText =
        "Wind Speed: " + (speed * (5 / 18)).toFixed(2) + " m/s";
      document.querySelector(".wind3").innerText = "Wind Speed: " + (speed/1.6093440006147).toFixed(2) + " miles/hr";
      document.querySelector(".wind4").innerText =
        "Wind Speed: " + (speed / 1.852).toFixed(2) + " knots";
      document.body.style.backgroundImage="url('https://source.unsplash.com/random/1920x1080/?" + name +"')"
    },
    search: function(){
         this.fetchWeather(document.querySelector(".search-bar").value);
    }  
};
const search2 = document.querySelector(".search-bar")
search2.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
    search2.value = "";
  }
});
const search1 = document.querySelector(".search button")
search1.addEventListener("click", function () {
  weather.search();
  search2.value = "";
});