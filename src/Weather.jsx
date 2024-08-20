// import React, { useState } from 'react'
// import axios from 'axios';



// const Weather = () => {

//     const [city, setcity] = useState();
//     const [weather, setWeather] = useState();
//     const handleCityChange = (e) => {
//         setcity(e.target.value)


//     }

//     const fetchWeather = async () => {
//         try {
//             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"8abb9362b1558ab9b4115fb68eef8beb"}`)
//             console.log(response)
        
//         setWeather(response)


//         }
//         catch(error) {
//             console.log("error occured ")

//         }
//     }

//     const handleClick = () => {
//         fetchWeather();

//     }
//     return (
//         <>
//             <div className='weather-container' >
//                 <input type="text" className='' placeholder='City Name' value={city} onChange={handleCityChange} />
//                 <button onClick={handleClick}> get weather </button>
//                 {weather &&   <>
//                 <div className='weather-info'>
//                     <h3>{ weather.data.name}</h3>
//                     <span>Temperature is : {(weather.data.main.temp  )} </span>
//                     <span>Temperature is : {weather.data.weather[0].description } </span>
//                     <span>Humidity is : {weather.data.main.humidity} </span>
//                 </div>
//                 </>}
//             </div>
//         </>
//     )
// }

// export default Weather


import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"8abb9362b1558ab9b4115fb68eef8beb"}`);
            console.log(response);
            setWeather(response.data);
        } catch (error) {
            console.log("Error occurred: ", error);
        }
    };

    const handleClick = () => {
        fetchWeather();
    };

    return (
        <>
            <div className='weather-container'>
                <input type="text" placeholder='City Name' value={city} onChange={handleCityChange} />
                <button onClick={handleClick}>Get Weather</button>
                {weather && (
                    <div className='weather-info'>
                        <h3>City : {weather.name}</h3>
                        <span>Temperature: {weather.main.temp} °C</span>
                        <span>Description: {weather.weather[0].description}</span>
                        <span>Humidity: {weather.main.humidity}%</span>
                    </div>
                )}
            </div>
        </>
    );
};

export default Weather;
