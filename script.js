const searchForm = document.getElementById("searchForm");
const searchDiv = document.getElementById("searchDiv");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const country = document.getElementById("country");
const body = document.querySelector("body");

searchForm.onsubmit = function (e) {
    e.preventDefault();

    const searchData = new FormData(searchForm);
    
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchData.get("cityName")}&appid=8e5c5d89aa0321b039a906842ea53fed`;
     
     fetch(url)
     .then(function (response){
         response
         .json()
         .then(function(data){
            searchDiv.style.visibility = "visible";
            city.innerText = data.name;
            country.innerText = data.sys.country;
            weather.innerText = data.weather[0].main;
            temperature.innerText = data.main.temp;
            
            if(data.weather[0].main==="Snow"){
               body.style.backgroundImage="url('./images/snow.jpg')";   
            } else if(data.weather[0].main==="Mist"){
                body.style.backgroundImage="url('./images/mist.jpg')";
            }else if(data.weather[0].main==="Clouds"){
                body.style.backgroundImage="url('./images/clouds.jpg')";
            }else if(data.weather[0].main==="Cold"){
                body.style.backgroundImage="url('./images/cold.jpg')";
            }else if(data.weather[0].main==="Clear"){
                body.style.backgroundImage="url('./images/clear.jpg')";
            }else if(data.weather[0].main==="Smoke"){
                body.style.backgroundImage="url('./images/smoke.jpg')";
            }else{
                body.style.backgroundImage="url('./images/weather.png')";
            }
            body.style.backgroundRepeat="no-repeat";
            body.style.backgroundSize="cover";
         })
         
         .catch(function(error){
             console.log(error);
         })
         .catch(function(error){
             console.log(error);
         })
     })
}