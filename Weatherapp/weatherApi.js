const submitBtn = document.getElementById("submitBtn");
const weatherDiv = document.getElementById("weather");

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();

	const city = document.getElementById("city").value;
	const apiKey = "your_api_key_here";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherDiv.innerHTML = `<p>The temperature in ${city}: ${temperature}&degrees;C</p><p>The Current Weather: ${description}</p>`;
    })
    .catch((error) => console.log(error));

})
