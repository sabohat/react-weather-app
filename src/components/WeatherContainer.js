import React from "react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import moment from "moment";
import dotenv from "dotenv";
dotenv.config();
moment().format();

function WeatherContainer() {
  const [weather, setWeather] = useState({});
  const [time, setTime] = useState(moment().format("h:mm - dddd, D MMM'YY"));
  useEffect(() => {
    console.log(moment().format("LLLL"));
    fetchData(setWeather, "tashkent");
  }, []);

  setInterval(() => {
    setTime(moment().format("h:mm - dddd, D MMM'YY"));
  }, 1000);

  return (
    <div className="main-container">
      <div className="weather-container">
        <div
          className="weather-photo"
          style={
            weather.definition === "Clear"
              ? {
                  backgroundImage: "url(/images/clear-day.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }
              : null
          }
        >
          <div className="weather__logo">
            <b>the.weather</b>
          </div>
          <div className="weather__data">
            <div className="weather__degree">
              {weather.temp ? weather.temp : 0}&#176;
            </div>
            <div className="weather__data-details">
              <div className="weather__description">
                <div className="weather__city">
                  {weather.location ? weather.location : "Not found"}
                </div>
                <div className="weather__description-text">{time}</div>
              </div>
              <div className="weather__description">
                <div className="weather__icon ">
                  <img
                    src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
                    alt="Logo"
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="weather__description-text">
                  {weather.definition ? weather.definition : ""}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="weather-info">
          <form onSubmit={(e) => getWeatherInfo(e, setWeather)}>
            <input
              className="weather-info__input"
              placeholder="Another location"
            ></input>
            <button className="submit-button" type="submit">
              <FaSearch />
            </button>
          </form>
          <div className="weather__location">
            <div className="cities">
              <ul className="city-list">
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Andijan")}
                >
                  Andijan
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Bukhara")}
                >
                  Bukhara
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Fergana")}
                >
                  Fergana
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Jizzakh")}
                >
                  Jizzakh
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Khorezm")}
                >
                  Khorezm
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Namangan")}
                >
                  Namangan
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Navoiy")}
                >
                  Navoiy
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Kashkadaryo")}
                >
                  Kashkadaryo
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Samarkand")}
                >
                  Samarkand
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Sirdaryo")}
                >
                  Sirdaryo
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Surxondaryo")}
                >
                  Surxondaryo
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Tashkent")}
                >
                  Tashkent
                </li>
                <li
                  className="city"
                  onClick={() => fetchData(setWeather, "Karakalpakstan")}
                >
                  Karakalpakstan
                </li>
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
                  <span>Cloudy</span>{" "}
                  <span>{weather.cloudy ? weather.cloudy : 0} %</span>
                </li>
                <li className="data">
                  <span>Humidity</span>{" "}
                  <span>{weather.humidity ? weather.humidity : 0} %</span>
                </li>
                <li className="data">
                  <span>Wind</span>{" "}
                  <span>{weather.wind ? weather.wind : 0} km/h</span>
                </li>
                <li className="data">
                  <span>Pressure</span>{" "}
                  <span>{weather?.pressure ? weather.pressure : 0}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function getWeatherInfo(e, setWeather) {
  e.preventDefault();
  console.log(e.target.children[0].value);
  if (e.target.children[0].value === "") {
    alert("Please enter a valid location");
  } else {
    fetchData(setWeather, e.target.children[0].value);
    e.target.children[0].value = "";
  }
}
function fetchData(setWeather, location) {
  console.log(process.env.REACT_APP_OWM_KEY);
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_OWM_KEY}`;
  // const weatherURL =`http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${keys.OWM_KEY}`
  fetch(weatherURL)
    .then((res) => res.json())
    .then((data) =>
      setWeather({
        location: data.name,
        temp: Math.round(data?.main?.temp),
        definition: data.weather[0].main,
        cloudy: data.clouds?.all || 0,
        humidity: data?.main?.humidity,
        pressure: data?.main?.pressure,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
      })
    )
    .catch((err) => console.log("Error", err));
}

export default WeatherContainer;
