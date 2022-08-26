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
      document.querySelector(".temp").innerText =  temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
      document.body.style.backgroundImage="url('https://source.unsplash.com/random/1920x1080/?" + name +"')"
    },
    search: function(){
         this.fetchWeather(document.querySelector(".search-bar").value);
    }  
};
document.querySelector(".search button").addEventListener("click", function(){ 
    weather.search(); 
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){ 
    if(event.key == "Enter"){
        weather.search(); 
    } 
});