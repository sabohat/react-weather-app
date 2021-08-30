import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import React from "react";
import { useEffect } from "react";
import keys from "./../API_KEYS";

console.log(keys);
function WeatherContainer() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // useEffect(() => {
  //   console.log("useEffect");
  //   // const weatherURL =`http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${keys.OWM_KEY}`
  //   fetch(weatherURL)
  //   .then(res => res.json())
  //   .then(data => console.log("Data List Loaded", data.list))
  //   .catch(err => console.log("Error", err));
  // }, []);

  return (
    <div className="main-container">
      <div className="weather-container">
        <div className="weather-photo">
          <div className="weather__logo">
            <b>the.weather</b>
          </div>
          <div className="weather__data">
            <div className="weather__degree">26*</div>
            <div className="weather__data-details">
              <div className="weather__description">
                <div className="weather__city">London</div>
                <div className="weather__description-text">
                  10:36 - Tuesday, 22 Oct '19
                </div>
              </div>
              <div className="weather__description">
                <div className="weather__icon ">O</div>
                <div className="weather__description-text">Sunny</div>
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
          <button className="submit-button" type="submit">Search</button>
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
            <div className="header"> <b>Weather Details</b> </div>
            <div className="cities">
              <ul className="data-list">
                <li className="data"><span>Cloudy</span> <span>Data %</span></li>
                <li className="data"><span>Humidity</span> <span>Data %</span></li>
                <li className="data"><span>Wind</span> <span>Data km/h</span></li>
                <li className="data"><span>Rain</span> <span>Data mm</span></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherContainer;
