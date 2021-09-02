import React from "react";
import { useEffect, useState} from "react";
import keys from "./../API_KEYS";
import { FaSearch} from 'react-icons/fa';
function WeatherContainer() {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetchData(setWeather, 'tashkent')
  }, []);


  return (
    <div className="main-container">
      <div className="weather-container">
        <div className="weather-photo">
          <div className="weather__logo">
            <b>the.weather</b>
          </div>
          <div className="weather__data">
            <div className="weather__degree">{weather.temp ? weather.temp : 0 }&#176;</div>
            <div className="weather__data-details">
              <div className="weather__description">
                <div className="weather__city">{weather.location ? weather.location : 'Not found'}</div>
                <div className="weather__description-text">
                  10:36 - Tuesday, 22 Oct '19
                </div>
              </div>
              <div className="weather__description">
                <div className="weather__icon ">O</div>
                <div className="weather__description-text">{weather.definition ? weather.definition: ''}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="weather-info">
          <form>
            <input
              className="weather-info__input"
              placeholder="Another location"
            ></input>
            <button className="submit-button" type="submit" onClick={()=> getWeatherInfo()}>
             <FaSearch/>
            </button>
          </form>
          <div className="weather__location">
            <div className="cities">
              <ul className="city-list">
                <li className="city" onClick={()=> fetchData(setWeather, 'Andijan')}>Andijan</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Bukhara')}>Bukhara</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Fergana')}>Fergana</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Jizzakh')}>Jizzakh</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Khorezm')}>Khorezm</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Namangan')}>Namangan</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Navoiy')}>Navoiy</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Kashkadaryo')}>Kashkadaryo</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Samarkand')}>Samarkand</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Sirdaryo')}>Sirdaryo</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Surxondaryo')}>Surxondaryo</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Tashkent')}>Tashkent</li>
                <li className="city" onClick={()=> fetchData(setWeather, 'Karakalpakstan')}>Karakalpakstan</li>
              </ul>
            </div>
          </div>
          <div className="weather__details">
            <div className="header">
              {" "}
              <b>Weather Details</b>{" "}
            </div>
            <div className="cities">
              <ul className="data-list">
                <li className="data">
                  <span>Cloudy</span> <span>{weather.cloudy ? weather.cloudy : 0} %</span>
                </li>
                <li className="data">
                  <span>Humidity</span> <span>{weather.humidity ? weather.humidity : 0} %</span>
                </li>
                <li className="data">
                  <span>Wind</span> <span>{weather.wind ? weather.wind : 0} km/h</span>
                </li>
                <li className="data">
                  <span>Pressure</span> <span>{weather?.pressure ? weather.pressure : 0}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function getWeatherInfo(){}
function fetchData(setWeather, location){
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${keys.OWM_KEY}`;
    // const weatherURL =`http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${keys.OWM_KEY}`
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => setWeather({location: data.name, 
      temp: Math.round(data?.main?.temp),
      definition: data.weather[0].main,
      cloudy: data.clouds?.all || 0,
      humidity: data?.main?.humidity,
      pressure: data?.main?.pressure,
      wind: data.wind.speed
    }))
      .catch((err) => console.log("Error", err))
}

export default WeatherContainer;
