let weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5061036&appid=02acf3eba1e20146f0800379e8cb831c&units=imperial',true);

weatherRequest3.send();

weatherRequest3.onload =  function () {
    let weatherData = JSON.parse(weatherRequest3.responseText);
    console.log(weatherData);

    document.getElementById('currently3').innerHTML = weatherData.weather[0].main;
    document.getElementById('current-temp3').innerHTML = weatherData.main.temp;
    document.getElementById('current-humi3').innerHTML = weatherData.main.humidity;
    document.getElementById('current-wind3').innerHTML = weatherData.wind.speed;


}