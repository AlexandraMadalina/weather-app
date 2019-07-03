import React, { Component } from "react";
import Titles from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import Forecast from "./Components/Forecast";

// import axios from 'axios';
//https://api.openweathermap.org/data/2.5/forecast?q=Gent,Belgium&appid=8e9c3aa645cb00368f351936b2c582c9
const API_KEY = "8e9c3aa645cb00368f351936b2c582c9";

class App extends Component {
  state = {
    icon: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    error: undefined,
    forecast: null
  };
  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call_forecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    //  const data = await api_call_curent.json();
    const data = await api_call_forecast.json();
    console.log(data);
    const days = data.list.filter(el => el.dt_txt.split(" ")[1] === "09:00:00");

    const curent_weather = days[0];
    console.log(curent_weather);
    if (days.length > 5) days.shift();

    let forecast = [];
    days.forEach(day => {
      let obj = {
        date: day.dt_txt,
        icon: day.weather[0].icon,
        temp: day.main.temp
      };
      forecast.push(obj);
    });
    // console.log(forecast);
    if (city && country) {
      this.setState({
        icon: curent_weather.weather[0].icon,
        temperature: curent_weather.main.temp,
        city: data.city.name,
        country: data.city.country,
        pressure: curent_weather.main.pressure,
        humidity: curent_weather.main.humidity,
        wind: curent_weather.wind.speed,
        description: curent_weather.weather[0].description,
        forecast: forecast,
        error: ""
      });
    } else {
      this.setState({
        icon: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        forecast: undefined,
        error: "Please enter the values"
      });
    }
    console.log(this.state.forecast);
  };

  render() {
    return (
      <div>
        <div className="container w-75">
          <div className="row">
            <div className="col text-center">
              <Titles />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Form getWeather={this.getWeather} />
            </div>
          </div>

          <Weather
            icon={this.state.icon}
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            wind={this.state.wind}
            description={this.state.description}
            error={this.state.error}
          />

          <Forecast forecast={this.state.forecast} />
        </div>
      </div>
    );
  }
}

export default App;
