const apiKey = "4d8fb5b93d4af21d66a2948710284366";

async function getWeather(){
  const inputVal = document.querySelector('#cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  try{
    const result = await fetch(url);
    if(!result.ok) throw new Error("The weather for this city is not valid...");
    const data = await result.json();
    document.querySelector("#weatherCity").innerText = `${data.name}, ${data.sys.country}`;
    document.querySelector("#weatherInfo").innerText= `${data.weather[0].description}`;
    const weatherTempEl=document.querySelector("#temp");
    weatherTempEl.innerText= `Temp: ${data.main.temp} °C`;
    weatherTempEl.style.fontWeight="bold";
    const weatherWetEl = document.querySelector("#moisture");
    weatherWetEl.style.fontWeight = "bold";
    weatherWetEl.innerText = `Humid: ${data.main.humidity}%`;
  }
  catch(error){
    alert(error.message);
  }
}

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener('click',()=>getWeather());