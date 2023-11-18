const weatherBtn = document.getElementById("weatherBtn")
weatherBtn.addEventListener("click", async () => {
    let cityName = document.getElementById("city-name").value;
    const url = "https://comp-1537-lab9.onrender.com"
    response = await fetch(`https://comp-1537-lab9.onrender.com/weather?city=${cityName}&units=metric`)
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