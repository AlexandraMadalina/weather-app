import React, {Component} from "react";
import Titles from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
// import axios from 'axios';

const API_KEY = "8e9c3aa645cb00368f351936b2c582c9";
class App extends Component{
state = {
  icon: undefined,
  temperature: undefined,
  city: undefined,
  country: undefined,
  pressure: undefined,
  humidity: undefined,
  wind: undefined,
  description: undefined,
  error: undefined
}
getWeather = async (e) =>{
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
 const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

 const data = await api_call.json();
 console.log(data);
 if(city && country){
  
  this.setState({
  icon: data.weather[0].icon,
  temperature: data.main.temp,
  city: data.name,
  country: data.sys.country,
  pressure: data.main.pressure,
  humidity: data.main.humidity,
  wind: data.wind.speed,
  description: data.weather[0].description,
  error: ""
  });
 }else{
  this.setState({
    icon: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    error: 'Please enter the values'
    });
 }
 
  
}

  render(){
    return(
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
                  error={this.state.error}/>
            
          </div>
       
        
      </div>
    );
  }
}


               
export default App;

        