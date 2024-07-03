const apiKey="7824b6fca6ba3fc348a43573f10ec641";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";


async function getData()
{
    let cityN = document.getElementById("city").value;
    const response = await fetch(apiUrl + `${cityN}&appid=${apiKey}`);
    
    var data = await response.json();
    console.log(data);
    document.getElementById("cName").innerHTML=data.name;
    document.getElementById("cDegree").innerHTML=(data.main.temp-273.15).toFixed(1)+`°C`;
    document.getElementById("huminfo").innerHTML=data.main.humidity+"%"+`<br>Humidity`;
    document.getElementById("wininfo").innerHTML=data.wind.speed+"km/h"+`<br>Wind Speed`;
    let img =document.querySelector("#midcontainer img");
    img.src=`${data.weather[0].main}.png`;
}





