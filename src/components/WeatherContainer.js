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
            <div className="weather__details">
              <div className="weather__description">
                <div className="weather__city">
                  London
                </div>
                <div className="weather__description-text">
                  10:36 - Tuesday, 22 Oct '19
                </div>
                
              </div>
              <div className="weather__description">
                <div className="weather__icon ">
                  O
                </div>
                <div className="weather__description-text">
                  Sunny
                </div>
                
              </div>
              
            </div>
          </div>
        </div>

        <div className="weather-info"></div>
      </div>
      {/* <h1>{account}</h1>
      <button onClick={() => depositMoney(100)}>Deposit 100</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw 100</button> */}
    </div>
  );
}

export default WeatherContainer;
