const weatherApi={
    key: "1bf123c83122ea0444959101ac6798ec",
    baseUrl :"https://api.openweathermap.org/data/2.5/weather"
}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

 const searchInputBox = document.getElementById('input-box');

// // event listener function on keypress
// keyboardevent is an argument

 searchInputBox.addEventListener('keyup',(keyboardevent)=>{
     if (keyboardevent.code === 'Enter') {
         console.log(searchInputBox.value)
         getWeatherReport(searchInputBox.value)
 }
 });

// city is a parameter
 function getWeatherReport(city){
     fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
     .then(weather=>{
         return weather.json();
     }).then(showWeatherReport)
 }

 // show weather report
 function showWeatherReport(weather){
     console.log(weather)

     let city = document.getElementById('city');
     city.innerText = `${weather.name},${weather.sys.country}`;


     let temperature= document.getElementById('temp')
     temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`


    let minMaxTemp = document.getElementById('min-max')
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`


    let weatherType = document.getElementById('weather');
    weatherType.innerText= `${weather.weather[0].main}`;


    let date = document.getElementById('date')
    let todayDate= new Date();
    date.innerText = dateManage(todayDate)

    if(weatherType.textContent=='Clear'){
    document.body.style.backgroundImage = "url('images/clear.jpg')";

    } else if(weatherType.textContent=='Clouds'){
        document.body.style.backgroundImage = "url('images/cloud.jpg')";

    } else if(weatherType.textContent=='Haze'){
        document.body.style.backgroundImage = "url('images/cloud.jpg')";

    } else if(weatherType.textContent=='Rain'){
        document.body.style.backgroundImage = "url('images/rain.jpg')";

    } else if(weatherType.textContent=='Snow'){
        document.body.style.backgroundImage = "url('images/snow.jpg')";

    } else if(weatherType.textContent=='Sunny'){
        document.body.style.backgroundImage = "url('images/sunny.jpg')";
 
    } else if(weatherType.textContent=='Thunderstorm'){
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
 }

 }



 function dateManage(datearg){
     let days = ["sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", ];
     let months =["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



     let year = datearg.getFullYear();
     let month = months[datearg.getMonth()];
     let date = datearg.getDate();
     let day = days[datearg.getDay()];

     return`${date} ${month} (${day}), ${year}`
 }
