const apikey="c07a7974a700f83fb2b7ba8d3ca33bdc";
const weather1=document.getElementById("weather-data");
const input1=document.getElementById("city-input");
const form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  const cityval=input1.value;
  getWeatherData(cityval);
})
async function getWeatherData(cityval){
  try{
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${apikey}&units=metric`);
    if(!res.ok){
      throw  new Error("Network response not ok");
    }
  const data=await res.json();
 console.log(data);
 const temperature1=Math.round(data.main.temp);
 const description1=data.weather[0].description;
 const icon1=data.weather[0].icon;
 const details=[
  `Feels like: ${Math.round(data.main.feels_like)}`,
  `Humidity: ${data.main.humidity}%`,
  `Wind: ${data.wind.speed} m/s`,
 ]
 weather1.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon1}.png" alt="weather-app">` ;
 weather1.querySelector(".temperature").textContent=`${temperature1}°C`
 weather1.querySelector(".discription").textContent=description1;
 weather1.querySelector(".details").innerHTML=details.map((detail)=>`<div>${detail}</div>`).join("");

  }catch(error){
    weather1.querySelector(".icon").innerHTML="";
    weather1.querySelector(".temperature").textContent="";
    weather1.querySelector(".discription").textContent="an error occured try after sometime";
    weather1.querySelector(".details").innerHTML="";


  }
}