const weatherBtn = document.getElementById("weatherBtn")
weatherBtn.addEventListener("click", async () => {
    let cityName = document.getElementById("city-name").value;
    response = await fetch(`http://localhost:3000/weather?city=${cityName}&units=metric`)
    responseJson = await response.json()
    console.log(responseJson);
    document.getElementById("result").innerHTML = `<div>${responseJson.weather[0].description}</div>`;
    document.getElementById("result").innerHTML += `<div>${responseJson.main.temp} ℃</div>`;
    document.getElementById("result").innerHTML += `<img src="https://openweathermap.org/img/wn/${responseJson.weather[0].icon}@2x.png">`;
    weatherBtn.disabled = true;
})

document.getElementById("city-name").addEventListener("click", () => {
    weatherBtn.disabled = false;
})