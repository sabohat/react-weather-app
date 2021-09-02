import React from "react";
import { useEffect, useState} from "react";
import keys from "./../API_KEYS";

function WeatherContainer() {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=tashkent&units=metric&appid=${keys.OWM_KEY}`;
    // const weatherURL =`http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${keys.OWM_KEY}`
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => setWeather({location: data.name, 
      temp: Math.round(data.main.temp),
      definition: data.weather[0].main,
      cloudy: data.clouds?.all || 0,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.wind.speed
    }))
      .catch((err) => console.log("Error", err))
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
            <button className="submit-button" type="submit">
              {weather.name}
            </button>
          </form>
          <div className="weather__location">
            <div className="cities">
              <ul className="city-list">
                <li className="city">Birmingham</li>
                <li className="city">Birmingham</li>
                <li className="city">Birmingham</li>
                <li className="city">Birmingham</li>
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

export default WeatherContainer;
