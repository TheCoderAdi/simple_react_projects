import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import cloudImg from "../assets/cloud.png";
import "./Project_Styles/weather.css";

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("odisha");
  useEffect(() => {
    const weatherDataApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`;
        const response = await fetch(url);
        const resJSON = await response.json();
        setCity(resJSON.main);
      } catch (error) {
        console.error("Unable to fetch data");
      }
    };
    weatherDataApi();
  }, [search]);
  return (
    <>
      <div className="weatherApp">
        <div className="weatherBox">
          <img src={cloudImg} alt="" />
          <div>
            <input
              type="search"
              className="inputFieldWeather"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <p className="errorMsg">No Data Found</p>
          ) : (
            <>
              <div className="infoWeather">
                <h2 className="location">{search}</h2>
                <h1 className="temp">{city.temp}°C</h1>
                <h3 className="tempmin_max">
                  Min: {city.temp_min}°C <br /> Max: {city.temp_max}°C
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="goToPage">
        <Link to="/projects">
          <button className="goBtn">
            <BiArrowBack style={{ fontSize: "1.5rem" }} />
          </button>
        </Link>
      </div>
    </>
  );
};

export default WeatherApp;
