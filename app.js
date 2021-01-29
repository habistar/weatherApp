//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const apiInfo = {
    apiKey:"bd2da0e36aca9e6ec460c6fd85ab90fd",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox = document.getElementById('input-box');


//Event Listener Function on Keypress
searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
})
document.getElementById("search_btn").addEventListener("click", function() {
    console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
  });


//Get weather Report
function getWeatherReport(city) {
    fetch(`${apiInfo.baseUrl}q=${city}&appid=${apiInfo.apiKey}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//Show weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) || ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    //Icon Change
    let icon = document.getElementById('icon');





    //background Image
    if(weatherType.textContent == 'Clear'){
        icon.innerHTML = "<i class='far fa-sun' style='color: #eccc68'></i>";
        document.body.style.backgroundImage = "url('https://c.pxhere.com/photos/88/fc/cloud_sky_blue_nature_weather_white_light_summer-1376850.jpg!d')";
    } else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/68/cc/68/68cc688d82f6e159e7174e1825b69ab7.jpg')";
        icon.innerHTML = "<i class='fas fa-cloud' style='color:  #D3D3D3'></i>";
    } else if(weatherType.textContent == 'Haze'){
        icon.innerHTML = "<i class='fas fa-smog' style='color: #dcd0ff'></i>";
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/06/ee/79/06ee79da9c09a8f5ada2a7d3f637085b.jpg')";
    } else if(weatherType.textContent == 'Rain'){
        icon.innerHTML = "<i class='fas fa-cloud-rain' style='color: #afc3cc'></i>";
        document.body.style.backgroundImage = "url('https://www.glasshouseme.com/wp-content/uploads/2016/05/rain-wallpaper-weather-nature-wallpapers-wallpap-screensavers-albums-collectpics-ibackgroundz.jpg')";
    } else if(weatherType.textContent == 'Snow'){
        icon.innerHTML = "<i class='far fa-snowflake' style='color: #FFFFFF'></i>";
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1n6Tvv69myyYevU7OOIxacApdhQldNVL-w&usqp=CAU')";
    } else if(weatherType.textContent == 'Sunny'){
        icon.innerHTML = "<i class='far fa-sun' style='color: #eccc68'></i>";
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78y8xa5x0Uzuorw_OEVw1fzFxbM6tsWEj2Q&usqp=CAU')";
    } else if(weatherType.textContent == 'Thunderstorm'){
        icon.innerHTML = "<i class='fas fa-cloud-showers-heavy' style='color: #808080'></i>";
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp309829.jpg')";
    } else if(weatherType.textContent == 'Smoke'){
        icon.innerHTML = "<i class='fas fa-smog' style='color: #dcd0ff'></i>";
        document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
    } else if(weatherType.textContent == 'Mist'){
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp4155376.jpg')";
        icon.innerHTML = "<i class='fas fa-smog' style='color: #dcd0ff'></i>";
    }else if(weatherType.textContent == 'Fog'){
        icon.innerHTML = "<i class='fas fa-smog' style='color: #dcd0ff'></i>";
        document.body.style.backgroundImage = "url('https://4kwallpapers.com/images/wallpapers/forest-rhone-alpes-sunlight-morning-fog-blue-ambiance-5120x2880-1095.jpg')";
    }
   




}

//Date manage
function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day =days[dateArg.getDay()];

    //return `${date} ${month} (${day}), ${year}`;
    return `${day} | ${month} ${date} | ${year}`;
}


//toggle button
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', (event) => {
    //change theme
    document.getElementById("app-main").classList.toggle('dark');
    document.getElementById("input-box").classList.toggle('dark');
    document.getElementById("weather-body").classList.toggle('dark');
    if(document.getElementById("search_btn").style.color == 'white') {
        document.getElementById("search_btn").style.color = 'black';
    }
    else {
        document.getElementById("search_btn").style.color = 'white';
    }
    
});