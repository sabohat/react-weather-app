import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import React from "react";
import {useEffect} from 'react'

function WeatherContainer() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
 console.log(process.env.WEATHER_API_KEY)
  return (
    <>
      <div className="weather-container">HIEIHDIASD</div>
      <h1>{account}</h1>
      <button onClick={() => depositMoney(100)}>Deposit 100</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw 100</button>
    </>
  );
}

export default WeatherContainer;
