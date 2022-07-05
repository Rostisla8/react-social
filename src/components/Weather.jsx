import React, { useEffect, useState } from 'react';







const Weather = () => {
    let [weatherReasult , setWeatherResult] = useState()
    useEffect(async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Брест&lang=ru&appid=01ffc5c2eafbb0930b2eebf9e7f897f1&units=metric`);
        const data = await res.json();
        setWeatherResult(data)
    },[])

    return (
        <div>
        <div className="banner pull-lg-right banner_container">
        <h2 className='weather_title'>Погода</h2>
        </div>
        
        {weatherReasult ? (
        <div className="sidebar">
        <div className="weather">
    <i className={`weather-icon owf owf-`+ weatherReasult.weather[0].id}></i>
    <div className="weather-error"></div>
    <div className="description-container">
        <p className="temperature">{weatherReasult.main.temp.toFixed(0) + '°C'}</p>
        <p className="weather-description">{weatherReasult.weather[0].description}</p>
    </div>
    </div>
    </div>  ) : ''}
    </div>                   
    );
};

export default Weather;