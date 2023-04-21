const submitBtn = document.getElementById("submitBtn");
const weatherDiv = document.getElementById("weather");

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();

	const city = document.getElementById("city").value;
	const apiKey = "your_api_key_here";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
})
